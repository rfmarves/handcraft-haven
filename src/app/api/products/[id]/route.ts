import { NextResponse } from "next/server"
import postgres from "postgres"

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL
const sql = postgres(url!, { ssl: "require" })

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params

    const rows = await sql`
     SELECT 
  products.*,
  reviews.id AS review_id,
  reviews.rating,
  reviews.comment
FROM products
LEFT JOIN reviews
  ON products.id = reviews.product_id
WHERE products.id = ${id};


    `

    const product = rows[0]

    if (!product) {
      console.log("No Data found")
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "DB error" },
      { status: 500 },
    )
  }
}
