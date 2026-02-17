import { NextResponse } from "next/server";
import postgres from "postgres";

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
const sql = postgres(url!, { ssl: "require" });

export async function GET() {
  try {
    const rows = await sql`
      SELECT id, name, image_filename
      FROM users
      WHERE role = 'seller'
      ORDER BY name ASC
    `;

    return NextResponse.json(rows);
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "DB error" },
      { status: 500 }
    );
  }
}
