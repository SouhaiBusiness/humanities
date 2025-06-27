import { NextResponse } from "next/server"
import { AssociationService } from "@/lib/services/associationService"

export async function GET() {
  try {
    const [pending, stats] = await Promise.all([
      AssociationService.getPendingAssociations(),
      AssociationService.getAssociationStats(),
    ])

    return NextResponse.json({ pending, stats })
  } catch (error) {
    console.error("Error fetching admin data:", error)
    return NextResponse.json({ error: "Failed to fetch admin data" }, { status: 500 })
  }
}
