"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "../../page.module.css";
import { addToCart } from "../../lib/cart-local";

type Product = {
  id: string;
  name: string;
  category_id: string;
  image_filename: string;
  seller_id: string;
  price: number;
  description: string;
  featured: boolean;
};

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        setLoading(true);
        setErr(null);

        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to load product");

        const data = (await res.json()) as Product;
        setProduct(data);
      } catch (e: any) {
        setErr(e?.message ?? "Failed to load product");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  function handleAdd() {
    if (!product) return;
    addToCart(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  }

  if (loading) {
    return <div style={{ padding: 40 }}>Loading...</div>;
  }

  if (err || !product) {
    return (
      <div style={{ padding: 40 }}>
        <p>Error: {err ?? "Product not found"}</p>
        <Link href="/catalog">← Back to catalog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, maxWidth: 1100, margin: "0 auto" }}>
      <Link href="/catalog">← Back to catalog</Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginTop: 20,
        }}
      >
        <div>
          <img
            src={`/products/${product.image_filename}`}
            alt={product.name}
            style={{
              width: "100%",
              height: 400,
              objectFit: "cover",
              borderRadius: 12,
            }}
          />
        </div>

        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: 20, fontWeight: 700 }}>
            ¥{product.price}
          </p>
          <p>{product.description}</p>

          <button
            onClick={handleAdd}
            style={{
              marginTop: 16,
              padding: "10px 16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Add to cart
          </button>

          {added && (
            <div style={{ marginTop: 10, color: "green" }}>
              Added!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
