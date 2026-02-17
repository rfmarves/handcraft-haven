"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { addToCart } from "../lib/cart-local";

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

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

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

  function handleAdd(productId: string) {
    addToCart(productId, 1);
    setAddedId(productId);
    setTimeout(() => setAddedId(null), 900);
  }

  return (
    <section className={styles.featuredSection}>
      <div className={styles.featuredContainer}>
        <div className={styles.sectionHeader}>
          <div>
            <h1 className={styles.sectionTitle} style={{ fontSize: 26, margin: 0 }}>
              Catalog
            </h1>
            <p style={{ margin: "8px 0 0", color: "var(--text-secondary)" }}>
              Browse handmade products and add them to your cart.
            </p>
          </div>

          <Link className={styles.sectionLink} href="/cart">
            View cart →
          </Link>
        </div>

        {loading && <p>Loading...</p>}
        {err && <p>Error: {err}</p>}

        {!loading && !err && (
          <div className={styles.featuredGrid}>
            {products.map((p) => (
              <article key={p.id} className={styles.featuredCard}>
                <Link href={`/product/${p.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <div className={styles.featuredCardImg}>
                    <img
                      src={`/products/${p.image_filename}`}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/handcraft-haven-logo.svg";
                      }}
                    />
                  </div>

                  <div className={styles.featuredCardBody}>
                    <h3 className={styles.featuredCardTitle}>{p.name}</h3>
                    <p className={styles.featuredCardMeta}>
                      {(p.description ?? "").slice(0, 90)}
                      {(p.description ?? "").length > 90 ? "…" : ""}
                    </p>

                    <div className={styles.featuredCardRow}>
                      <span className={styles.featuredPrice}>¥{p.price}</span>
                    </div>
                  </div>
                </Link>

                <div style={{ padding: "0 14px 16px" }}>
                  <button
                    className={styles.featuredCardBtn}
                    onClick={() => handleAdd(p.id)}
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    Add to cart
                  </button>

                  {addedId === p.id && (
                    <span style={{ marginLeft: 10, color: "green", fontWeight: 800 }}>
                      Added!
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
