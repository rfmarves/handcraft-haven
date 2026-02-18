import Link from "next/link";
import postgres from "postgres";
import styles from "../../page.module.css";

export const dynamic = "force-dynamic";

type SellerRow = {
  id: string;
  name: string;
  image_filename: string | null;
  role: string;
};

type ProductRow = {
  id: string;
  name: string;
  category_id: string;
  image_filename: string | null;
  seller_id: string;
  price: number;
  description: string | null;
  featured: boolean;
};

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

function getAboutText(name: string) {
  return `${name} is an artisan seller on Handcraft Haven. Each item is handmade with care, focusing on quality materials, thoughtful details, and timeless design.`;
}

export default async function SellerDetailPage({
  params,
}: {
  // ✅ En tu setup, Next te está entregando params como Promise
  params: Promise<{ id: string }>;
}) {
  // ✅ Obligatorio: unwrap con await
  const { id } = await params;

  // ✅ Guard extra por si llega vacío (evita crash)
  if (!id) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div style={{ width: "100%", padding: "24px 16px" }}>
            <h1>Seller not found</h1>
            <Link href="/sellers" style={{ textDecoration: "underline" }}>
              ← Back to sellers
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const sellerRows = await sql<SellerRow[]>`
    SELECT id, name, image_filename, role
    FROM users
    WHERE id = ${id}
    LIMIT 1
  `;
  const seller = sellerRows[0];

  if (!seller || seller.role !== "seller") {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div style={{ width: "100%", padding: "24px 16px" }}>
            <h1>Seller not found</h1>
            <Link href="/sellers" style={{ textDecoration: "underline" }}>
              ← Back to sellers
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const products = await sql<ProductRow[]>`
    SELECT id, name, category_id, image_filename, seller_id, price, description, featured
    FROM products
    WHERE seller_id = ${id}
    ORDER BY name ASC
  `;

  const about = getAboutText(seller.name);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: "100%", padding: "24px 16px", maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/sellers" style={{ textDecoration: "underline" }}>
            ← Back to sellers
          </Link>

          <section
            style={{
              marginTop: 16,
              display: "flex",
              gap: 18,
              alignItems: "center",
              border: "1px solid #eee",
              borderRadius: 18,
              padding: 16,
              background: "white",
            }}
          >
            <img
              src={seller.image_filename ? `/users/${seller.image_filename}` : "/handcraft-haven-logo.svg"}
              alt={seller.name}
              width={96}
              height={96}
              style={{
                borderRadius: 20,
                objectFit: "cover",
                border: "1px solid #eee",
                background: "#fafafa",
              }}
            />

            <div style={{ flex: 1 }}>
              <h1 style={{ margin: 0 }}>{seller.name}</h1>
              <p style={{ marginTop: 6, opacity: 0.8 }}>Verified artisan seller</p>
            </div>
          </section>

          <section
            style={{
              marginTop: 16,
              border: "1px solid #eee",
              borderRadius: 18,
              padding: 16,
              background: "white",
            }}
          >
            <h2 style={{ margin: 0 }}>About</h2>
            <p style={{ marginTop: 10, lineHeight: 1.65, opacity: 0.9 }}>{about}</p>
          </section>

          <section style={{ marginTop: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
              <h2 style={{ margin: 0 }}>Products</h2>
              <span style={{ opacity: 0.75 }}>{products.length} item(s)</span>
            </div>

            {products.length === 0 ? (
              <p style={{ marginTop: 10, opacity: 0.8 }}>This seller hasn’t listed products yet.</p>
            ) : (
              <div
                style={{
                  marginTop: 14,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 16,
                }}
              >
                {products.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      border: "1px solid #eee",
                      borderRadius: 18,
                      overflow: "hidden",
                      background: "white",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: 170,
                        background: "#fafafa",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <img
                        src={p.image_filename ? `/products/${p.image_filename}` : "/handcraft-haven-logo.svg"}
                        alt={p.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    <div style={{ padding: 14 }}>
                      <div style={{ fontWeight: 800 }}>{p.name}</div>
                      <div style={{ marginTop: 6, fontWeight: 800, opacity: 0.9 }}>¥{p.price}</div>

                      {p.description ? (
                        <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.5 }}>
                          {p.description.length > 120 ? p.description.slice(0, 120) + "…" : p.description}
                        </p>
                      ) : (
                        <p style={{ marginTop: 8, opacity: 0.7 }}>No description yet.</p>
                      )}

                      <div style={{ marginTop: 10 }}>
                        <Link href={`/product/${p.id}`} style={{ textDecoration: "underline", fontWeight: 700 }}>
                          View details →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
