import { NextResponse } from "next/server";
import postgres from "postgres";

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
const sql = postgres(url!, { ssl: "require" });

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const sellerRows = await sql`
      SELECT id, name, image_filename, role
      FROM users
      WHERE id = ${id}
      LIMIT 1
    `;
    const seller = sellerRows[0];

    if (!seller || seller.role !== "seller") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const products = await sql`
      SELECT id, name, category_id, image_filename, seller_id, price, description, featured
      FROM products
      WHERE seller_id = ${id}
      ORDER BY name ASC
    `;

    return NextResponse.json({ seller, products });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "DB error" },
      { status: 500 }
    );
  }
}
