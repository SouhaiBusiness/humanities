import { type NextRequest, NextResponse } from "next/server"
import { AssociationService } from "@/lib/services/associationService"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const association = await AssociationService.getAssociationById(params.id)

    if (!association) {
      return NextResponse.json({ error: "Association not found" }, { status: 404 })
    }

    return NextResponse.json(association)
  } catch (error) {
    console.error("Error fetching association:", error)
    return NextResponse.json({ error: "Failed to fetch association" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const updateData = await request.json()

    const success = await AssociationService.updateAssociation(params.id, updateData)

    if (!success) {
      return NextResponse.json({ error: "Association not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating association:", error)
    return NextResponse.json({ error: "Failed to update association" }, { status: 500 })
  }
}
