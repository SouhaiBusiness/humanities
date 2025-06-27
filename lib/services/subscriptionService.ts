import { getDatabase } from "@/lib/mongodb"
import type { Subscription } from "@/lib/models/Association"
import { ObjectId } from "mongodb"

export class SubscriptionService {
  private static async getCollection() {
    const db = await getDatabase()
    return db.collection<Subscription>("subscriptions")
  }

  static async createSubscription(
    subscriptionData: Omit<Subscription, "_id" | "createdAt" | "updatedAt">,
  ): Promise<ObjectId> {
    const collection = await this.getCollection()

    const subscription: Subscription = {
      ...subscriptionData,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await collection.insertOne(subscription)
    return result.insertedId
  }

  static async getSubscriptionByAssociationId(associationId: string): Promise<Subscription | null> {
    const collection = await this.getCollection()
    return await collection.findOne({ associationId: new ObjectId(associationId) })
  }

  static async updateSubscriptionStatus(
    associationId: string,
    status: "active" | "cancelled" | "past_due",
  ): Promise<boolean> {
    const collection = await this.getCollection()

    const result = await collection.updateOne(
      { associationId: new ObjectId(associationId) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      },
    )

    return result.modifiedCount > 0
  }

  static async getSubscriptionStats() {
    const collection = await this.getCollection()

    const [active, expiringSoon, overdue] = await Promise.all([
      collection.countDocuments({ status: "active" }),
      collection.countDocuments({
        status: "active",
        currentPeriodEnd: {
          $lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        },
      }),
      collection.countDocuments({ status: "past_due" }),
    ])

    return { active, expiringSoon, overdue }
  }
}
