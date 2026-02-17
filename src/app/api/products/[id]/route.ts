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

    const rows = await sql`
      SELECT * FROM products
      WHERE id = ${id}
      LIMIT 1
    `;

    const product = rows[0];

    if (!product) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "DB error" },
      { status: 500 }
    );
  }
}
