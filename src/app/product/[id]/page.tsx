import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";

const demoProducts: Record<
  string,
  {
    id: string;
    name: string;
    price: string;
    description: string;
    sellerName: string;
    sellerId: string;
    image: string;
    rating: number;
    reviews: { name: string; text: string }[];
  }
> = {
  "1": {
    id: "1",
    name: "Handmade Ceramic Mug",
    price: "$28.00",
    description:
      "A handcrafted ceramic mug with a smooth glaze finish. Perfect for coffee, tea, or as a thoughtful gift.",
    sellerName: "Blake’s Studio",
    sellerId: "blakes-studio",
    image: "/products/seller1_1.webp",
    rating: 4.8,
    reviews: [
      { name: "Emma", text: "Beautiful craftsmanship and fast shipping." },
      { name: "Noah", text: "Looks even better in person. Great quality!" },
    ],
  },
  "2": {
    id: "2",
    name: "Leather Wallet",
    price: "$45.00",
    description:
      "Minimal leather wallet made with durable, full-grain leather. Slim, elegant, and built to last.",
    sellerName: "Oak & Hide",
    sellerId: "oak-hide",
    image: "/products/seller2_1.webp",
    rating: 4.6,
    reviews: [{ name: "Sophia", text: "Exactly what I wanted. Super clean." }],
  },
};

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = demoProducts[params.id] ?? demoProducts["1"];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/catalog">Catalog</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <section className={styles.layout}>
          <div className={styles.media}>
            <div className={styles.imageWrap}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className={styles.details}>
            <h1 className={styles.title}>{product.name}</h1>

            <div className={styles.metaRow}>
              <span className={styles.price}>{product.price}</span>
              <span className={styles.rating}>
                ★ {product.rating} <span className={styles.muted}>({product.reviews.length} reviews)</span>
              </span>
            </div>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.actions}>
              <button className={styles.primary}>Add to cart</button>
              <button className={styles.secondary}>Save</button>
            </div>

            <div className={styles.sellerCard}>
              <div className={styles.sellerInfo}>
                <p className={styles.sellerLabel}>Seller</p>
                <Link className={styles.sellerName} href={`/sellers/${product.sellerId}`}>
                  {product.sellerName}
                </Link>
              </div>
              <Link className={styles.sellerLink} href={`/sellers/${product.sellerId}`}>
                View profile →
              </Link>
            </div>

            <section className={styles.reviews}>
              <h2 className={styles.sectionTitle}>Reviews</h2>

              <div className={styles.reviewList}>
                {product.reviews.map((r, i) => (
                  <article key={i} className={styles.reviewCard}>
                    <p className={styles.reviewName}>{r.name}</p>
                    <p className={styles.reviewText}>{r.text}</p>
                  </article>
                ))}
              </div>

              <button className={styles.reviewBtn}>Leave a review</button>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
