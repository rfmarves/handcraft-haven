import Link from "next/link";
import postgres from "postgres";
import styles from "../page.module.css";

export const dynamic = "force-dynamic";

type ProductRow = {
  id: string;
  name: string;
  price: number;
  image_filename: string | null;
  featured: boolean;
};

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

function productImgSrc(image_filename: string | null) {
  if (!image_filename) return "/handcraft-haven-logo.svg";

  let f = image_filename.trim();

  // normaliza si viene con rutas
  f = f.replace(/^https?:\/\/[^/]+\/products\//, "");
  f = f.replace(/^\/?products\//, "");
  f = f.replace(/^public\/products\//, "");

  return `/products/${f}`;
}

async function getFeaturedOrFallback(): Promise<ProductRow[]> {
  const featured = await sql<ProductRow[]>`
    SELECT id, name, price, image_filename, featured
    FROM products
    WHERE featured = true
    ORDER BY name ASC
    LIMIT 4
  `;

  if (featured.length > 0) return featured;

  // si nadie marcó featured, igual muestra 4 productos
  return await sql<ProductRow[]>`
    SELECT id, name, price, image_filename, featured
    FROM products
    ORDER BY name ASC
    LIMIT 4
  `;
}

export default async function GetFeaturedProducts() {
  const products = await getFeaturedOrFallback();

  return (
    <>
      {products.map((p) => (
        <div key={p.id} className={styles.featuredCard}>
          <div className={styles.featuredCardImg}>
            <img
              src={productImgSrc(p.image_filename)}
              alt={p.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className={styles.featuredCardBody}>
            <h3 className={styles.featuredCardTitle}>{p.name}</h3>
            <p className={styles.featuredCardMeta}>Ships worldwide</p>

            <div className={styles.featuredCardRow}>
              <span className={styles.featuredPrice}>¥{Number(p.price).toLocaleString()}</span>
              <Link className={styles.featuredCardBtn} href={`/product/${p.id}`}>
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
