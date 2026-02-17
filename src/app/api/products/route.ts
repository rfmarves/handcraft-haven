import { NextResponse } from "next/server";
import { fetchProduct } from "@/app/lib/data";

export async function GET() {
  try {
    const products = await fetchProduct();
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message ?? "Failed to fetch products" },
      { status: 500 }
    );
  }
}
