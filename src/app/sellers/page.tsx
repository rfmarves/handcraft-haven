import Link from "next/link";

import styles from "../page.module.css";

type Seller = {
  id: string;
  name: string;
  image_filename: string | null;
};

async function getSellers(): Promise<Seller[]> {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  const res = await fetch(`${base}/api/sellers`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load sellers");
  return (await res.json()) as Seller[];
}

export default async function SellersPage() {
  let sellers: Seller[] = [];
  let err: string | null = null;

  try {
    sellers = await getSellers();
  } catch (e: any) {
    err = e?.message ?? "Failed to load sellers";
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        

        <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
          <h1 style={{ margin: 0 }}>Artisan Sellers</h1>
          <p style={{ marginTop: 8, opacity: 0.8 }}>
            Discover talented creators behind the handmade products.
          </p>

          {err && (
            <div style={{ marginTop: 12 }}>
              <p style={{ fontWeight: 800 }}>Error: {err}</p>
            </div>
          )}

          {!err && (
            <div
              style={{
                marginTop: 18,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              {sellers.map((s) => (
                <Link
                  key={s.id}
                  href={`/sellers/${s.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    border: "1px solid #eee",
                    borderRadius: 18,
                    padding: 16,
                    background: "white",
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <img
                    src={s.image_filename ? `/users/${s.image_filename}` : "/handcraft-haven-logo.svg"}
                    alt={s.name}
                    width={64}
                    height={64}
                    style={{
                      borderRadius: 16,
                      objectFit: "cover",
                      border: "1px solid #eee",
                      background: "#fafafa",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 18 }}>{s.name}</div>
                    <div style={{ marginTop: 2, opacity: 0.75 }}>View profile →</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

       
      </main>
    </div>
  );
}
