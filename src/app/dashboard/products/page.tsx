import Image from "next/image";
import Link from "next/link";
import styles from "./dashboard-products.module.css";

const MY_PRODUCTS = [
  {
    id: "1",
    name: "Handmade Ceramic Mug",
    price: "$28.00",
    image: "/products/seller1_1.webp",
    status: "Active",
  },
  {
    id: "2",
    name: "Leather Wallet",
    price: "$45.00",
    image: "/products/seller2_1.webp",
    status: "Active",
  },
  {
    id: "3",
    name: "Macramé Wall Hanging",
    price: "$60.00",
    image: "/products/seller3_1.webp",
    status: "Draft",
  },
  {
    id: "4",
    name: "Wooden Jewelry Box",
    price: "$75.00",
    image: "/products/seller4_1.webp",
    status: "Active",
  },
];

export default function DashboardProductsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>My Products</h1>
            <p className={styles.subtitle}>
              Manage your product listings. Edit details, update images, or remove items.
            </p>
          </div>

          <Link className={styles.primaryBtn} href="/dashboard/add">
            + Add Product
          </Link>
        </header>

        <section className={styles.grid}>
          {MY_PRODUCTS.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.body}>
                <div className={styles.rowTop}>
                  <h2 className={styles.cardTitle}>{p.name}</h2>
                  <span
                    className={
                      p.status === "Active" ? styles.badgeActive : styles.badgeDraft
                    }
                  >
                    {p.status}
                  </span>
                </div>

                <div className={styles.rowMid}>
                  <span className={styles.price}>{p.price}</span>
                  <Link className={styles.viewLink} href={`/product/${p.id}`}>
                    View →
                  </Link>
                </div>

                <div className={styles.actions}>
                  <button className={styles.secondaryBtn}>Edit</button>
                  <button className={styles.dangerBtn}>Delete</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
