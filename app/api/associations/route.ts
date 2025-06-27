import { type NextRequest, NextResponse } from "next/server"
import { AssociationService } from "@/lib/services/associationService"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search") || undefined
    const category = searchParams.get("category") || undefined
    const city = searchParams.get("city") || undefined

    const associations = await AssociationService.getApprovedAssociations({
      search,
      category,
      city,
    })

    return NextResponse.json(associations)
  } catch (error) {
    console.error("Error fetching associations:", error)
    return NextResponse.json({ error: "Failed to fetch associations" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const associationData = await request.json()

    const associationId = await AssociationService.createAssociation(associationData)

    return NextResponse.json(
      {
        success: true,
        associationId: associationId.toString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating association:", error)
    return NextResponse.json({ error: "Failed to create association" }, { status: 500 })
  }
}
