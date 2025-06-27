import { type NextRequest, NextResponse } from "next/server"
import { AssociationService } from "@/lib/services/associationService"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const success = await AssociationService.updateAssociationStatus(params.id, "approved")

    if (!success) {
      return NextResponse.json({ error: "Association not found" }, { status: 404 })
    }

    // Here you could also send an approval email to the association

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error approving association:", error)
    return NextResponse.json({ error: "Failed to approve association" }, { status: 500 })
  }
}
