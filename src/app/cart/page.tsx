"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";


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

type CartLine = {
  productId: string;
  quantity: number;
};

const CART_KEY = "handcraft_haven_cart_v1";

function readCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeCart(lines: CartLine[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(lines));
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    setCart(readCart());
  }, []);

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

  function setCartAndPersist(next: CartLine[]) {
    setCart(next);
    if (typeof window !== "undefined") writeCart(next);
  }

  function inc(productId: string) {
    const next = [...cart];
    const i = next.findIndex((x) => x.productId === productId);
    if (i === -1) next.push({ productId, quantity: 1 });
    else next[i] = { ...next[i], quantity: next[i].quantity + 1 };
    setCartAndPersist(next);
  }

  function dec(productId: string) {
    const next = [...cart];
    const i = next.findIndex((x) => x.productId === productId);
    if (i === -1) return;
    const q = next[i].quantity - 1;
    if (q <= 0) next.splice(i, 1);
    else next[i] = { ...next[i], quantity: q };
    setCartAndPersist(next);
  }

  function remove(productId: string) {
    setCartAndPersist(cart.filter((x) => x.productId !== productId));
  }

  function clear() {
    setCartAndPersist([]);
  }

  const cartRows = useMemo(() => {
    const map = new Map(products.map((p) => [p.id, p]));
    return cart
      .map((line) => {
        const p = map.get(line.productId);
        if (!p) return null;
        return { product: p, quantity: line.quantity, lineTotal: p.price * line.quantity };
      })
      .filter(Boolean) as { product: Product; quantity: number; lineTotal: number }[];
  }, [cart, products]);

  const subtotal = useMemo(
    () => cartRows.reduce((sum, r) => sum + r.lineTotal, 0),
    [cartRows]
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        

        <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px" }}>
          <h1>Shopping cart</h1>

          {loading && <p>Loading...</p>}
          {err && <p>Error: {err}</p>}

          {!loading && cart.length === 0 && <p>Your cart is empty.</p>}

          {!loading &&
            cartRows.map(({ product, quantity, lineTotal }) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  padding: 12,
                  marginBottom: 10,
                  borderRadius: 8,
                }}
              >
                <strong>{product.name}</strong>
                <div>¥{product.price}</div>

                <div style={{ marginTop: 8 }}>
                  <button onClick={() => dec(product.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{quantity}</span>
                  <button onClick={() => inc(product.id)}>+</button>

                  <button
                    onClick={() => remove(product.id)}
                    style={{ marginLeft: 10 }}
                  >
                    Remove
                  </button>
                </div>

                <div style={{ marginTop: 6 }}>Total: ¥{lineTotal}</div>
              </div>
            ))}

          {!loading && cart.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <strong>Subtotal: ¥{subtotal}</strong>

              <div style={{ marginTop: 10 }}>
                <button onClick={clear}>Clear cart</button>
                <button
                  onClick={() => alert("Checkout not implemented")}
                  style={{ marginLeft: 10 }}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}

          <div style={{ marginTop: 20 }}>
            <Link href="/catalog">Continue shopping</Link>
          </div>
        </div>

       
      </main>
    </div>
  );
}
