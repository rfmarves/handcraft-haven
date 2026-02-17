"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../page.module.css";

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

export default function DashboardProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErr(null);

        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to load products");

        const data = (await res.json()) as Product[];
        setProducts(data);
      } catch (e: any) {
        setErr(e?.message ?? "Failed to load products");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
       

        <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
            <div>
              <h1 style={{ margin: 0 }}>My Products</h1>
              <p style={{ opacity: 0.8, marginTop: 6 }}>
                Dashboard placeholder: list products (later you can filter by seller).
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <Link href="/dashboard/add" style={{ textDecoration: "underline", fontWeight: 700 }}>
                + Add product
              </Link>
              <Link href="/catalog" style={{ textDecoration: "underline" }}>
                View catalog
              </Link>
            </div>
          </div>

          {loading && <p style={{ marginTop: 18 }}>Loading...</p>}
          {err && <p style={{ marginTop: 18 }}>Error: {err}</p>}

          {!loading && !err && products.length === 0 && (
            <div style={{ marginTop: 18, padding: 16, border: "1px solid #eee", borderRadius: 12 }}>
              <p style={{ margin: 0 }}>No products yet.</p>
              <p style={{ margin: "8px 0 0" }}>
                <Link href="/dashboard/add" style={{ textDecoration: "underline" }}>
                  Create your first listing
                </Link>
              </p>
            </div>
          )}

          {!loading && !err && products.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
                marginTop: 18,
                width: "100%",
              }}
            >
              {products.map((p) => (
                <div
                  key={p.id}
                  style={{
                    border: "1px solid #e8e8e8",
                    borderRadius: 14,
                    overflow: "hidden",
                    background: "white",
                  }}
                >
                  <div style={{ height: 170, background: "#fafafa", borderBottom: "1px solid #eee" }}>
                    <img
                      src={`/products/${p.image_filename}`}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/handcraft-haven-logo.svg";
                      }}
                    />
                  </div>

                  <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 800, lineHeight: 1.2 }}>{p.name}</div>
                    <div style={{ opacity: 0.8, marginTop: 6 }}>¥{p.price}</div>

                    <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
                      <Link href={`/product/${p.id}`} style={{ textDecoration: "underline" }}>
                        View
                      </Link>
                      <span style={{ opacity: 0.5 }}>|</span>
                      <span style={{ opacity: 0.7 }}>Edit (later)</span>
                      <span style={{ opacity: 0.5 }}>|</span>
                      <span style={{ opacity: 0.7 }}>Delete (later)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

     
      </main>
    </div>
  );
}
