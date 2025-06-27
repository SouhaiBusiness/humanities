import { getDatabase } from "@/lib/mongodb"
import type { Association } from "@/lib/models/Association"
import { ObjectId } from "mongodb"

export class AssociationService {
  private static async getCollection() {
    const db = await getDatabase()
    return db.collection<Association>("associations")
  }

  static async createAssociation(
    associationData: Omit<Association, "_id" | "createdAt" | "updatedAt">,
  ): Promise<ObjectId> {
    const collection = await this.getCollection()

    const association: Association = {
      ...associationData,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await collection.insertOne(association)
    return result.insertedId
  }

  static async getAssociationById(id: string): Promise<Association | null> {
    const collection = await this.getCollection()
    return await collection.findOne({ _id: new ObjectId(id) })
  }

  static async getApprovedAssociations(filters?: {
    search?: string
    category?: string
    city?: string
  }): Promise<Association[]> {
    const collection = await this.getCollection()

    const query: any = { status: "approved" }

    if (filters?.search) {
      query.$or = [
        { name: { $regex: filters.search, $options: "i" } },
        { description: { $regex: filters.search, $options: "i" } },
      ]
    }

    if (filters?.category && filters.category !== "all") {
      query.category = filters.category
    }

    if (filters?.city) {
      query.city = { $regex: filters.city, $options: "i" }
    }

    return await collection.find(query).sort({ createdAt: -1 }).toArray()
  }

  static async getPendingAssociations(): Promise<Association[]> {
    const collection = await this.getCollection()
    return await collection.find({ status: "pending" }).sort({ createdAt: -1 }).toArray()
  }

  static async updateAssociationStatus(id: string, status: "approved" | "rejected"): Promise<boolean> {
    const collection = await this.getCollection()

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      },
    )

    return result.modifiedCount > 0
  }

  static async updateAssociation(id: string, updateData: Partial<Association>): Promise<boolean> {
    const collection = await this.getCollection()

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date(),
        },
      },
    )

    return result.modifiedCount > 0
  }

  static async deleteAssociation(id: string): Promise<boolean> {
    const collection = await this.getCollection()
    const result = await collection.deleteOne({ _id: new ObjectId(id) })
    return result.deletedCount > 0
  }

  static async getAssociationStats() {
    const collection = await this.getCollection()

    const [total, pending, approved] = await Promise.all([
      collection.countDocuments(),
      collection.countDocuments({ status: "pending" }),
      collection.countDocuments({ status: "approved" }),
    ])

    return { total, pending, approved }
  }
}
