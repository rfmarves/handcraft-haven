import Link from "next/link";
import Image from "next/image";
import styles from "./catalog.module.css";

const PRODUCTS = [
  {
    id: "1",
    name: "Handmade Ceramic Mug",
    price: "$28.00",
    seller: "Blake’s Studio",
    image: "/products/seller1_1.webp",
  },
  {
    id: "2",
    name: "Leather Wallet",
    price: "$45.00",
    seller: "Oak & Hide",
    image: "/products/seller2_1.webp",
  },
  {
    id: "3",
    name: "Macramé Wall Hanging",
    price: "$60.00",
    seller: "June’s Creations",
    image: "/products/seller3_1.webp",
  },
  {
    id: "4",
    name: "Wooden Jewelry Box",
    price: "$75.00",
    seller: "Pineworks",
    image: "/products/seller4_1.webp",
  },
  {
    id: "5",
    name: "Minimal Art Print",
    price: "$22.00",
    seller: "Confetti Boutique",
    image: "/products/seller5_1.webp",
  },
  {
    id: "6",
    name: "Tinted Glass Vase",
    price: "$54.00",
    seller: "Studio Glass",
    image: "/products/seller6_1.webp",
  },
];

export default function CatalogPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Catalog</h1>
          <p className={styles.subtitle}>
            Browse curated handmade products from independent artisans.
          </p>
        </header>

        <section className={styles.grid}>
          {PRODUCTS.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{p.name}</h2>
                <p className={styles.cardMeta}>by {p.seller}</p>
                <div className={styles.cardRow}>
                  <span className={styles.price}>{p.price}</span>
                  <span className={styles.view}>View →</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
