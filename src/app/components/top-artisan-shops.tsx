import Link from "next/link";
import postgres from "postgres";
import styles from "../page.module.css";

export const dynamic = "force-dynamic";

type SellerRow = {
  id: string;
  name: string;
  image_filename: string | null;
};

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

function sellerImgSrc(image_filename: string | null) {
  if (!image_filename) return "/handcraft-haven-logo.svg";

  let f = image_filename.trim();
  f = f.replace(/^\/?users\//, "");
  f = f.replace(/^public\/users\//, "");
  return `/users/${f}`;
}

export default async function TopArtisanShops() {
  // trae algunos sellers (ajusta LIMIT si quieres)
  const sellers = await sql<SellerRow[]>`
    SELECT id, name, image_filename
    FROM users
    WHERE role = 'seller'
    ORDER BY name ASC
    LIMIT 6
  `;

  return (
    <section className={styles.featuredSection}>
      <div className={styles.featuredContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Top artisan shops</h2>
          <Link className={styles.sectionLink} href="/sellers">
            View all
          </Link>
        </div>

        <div className={styles.featuredGrid}>
          {sellers.map((s) => (
            <Link
              key={s.id}
              href={`/sellers/${s.id}`}
              className={styles.featuredCard}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.featuredCardImg}>
                <img
                  src={sellerImgSrc(s.image_filename)}
                  alt={s.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className={styles.featuredCardBody}>
                <h3 className={styles.featuredCardTitle}>{s.name}</h3>
                <p className={styles.featuredCardMeta}>Verified artisan seller</p>
                <div className={styles.featuredCardRow}>
                  <span className={styles.featuredPrice}>Shop</span>
                  <span className={styles.featuredCardBtn}>View</span>
                </div>
              </div>
            </Link>
          ))}

          {sellers.length === 0 && (
            <div style={{ gridColumn: "1 / -1", opacity: 0.8 }}>
              No artisan shops found yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
