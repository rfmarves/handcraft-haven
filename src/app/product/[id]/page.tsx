import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";

type Review = { name: string; text: string };

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  sellerName: string;
  sellerId: string;
  image: string;
  rating: number;
  reviews: Review[];
};

const demoProducts: Record<string, Product> = {
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
  "3": {
    id: "3",
    name: "Macramé Wall Hanging",
    price: "$60.00",
    description:
      "Hand-knotted macramé wall hanging made with soft cotton cord.",
    sellerName: "June’s Creations",
    sellerId: "junes-creations",
    image: "/products/seller3_1.webp",
    rating: 4.7,
    reviews: [{ name: "Liam", text: "Looks amazing on my wall." }],
  },
  "4": {
    id: "4",
    name: "Wooden Jewelry Box",
    price: "$75.00",
    description: "A handcrafted wooden jewelry box.",
    sellerName: "Pineworks",
    sellerId: "pineworks",
    image: "/products/seller4_1.webp",
    rating: 4.9,
    reviews: [{ name: "Ava", text: "So beautiful." }],
  },
  "5": {
    id: "5",
    name: "Minimal Art Print",
    price: "$22.00",
    description: "High-quality minimal art print.",
    sellerName: "Confetti Boutique",
    sellerId: "confetti-boutique",
    image: "/products/seller5_1.webp",
    rating: 4.5,
    reviews: [{ name: "Mia", text: "Love it." }],
  },
  "6": {
    id: "6",
    name: "Tinted Glass Vase",
    price: "$54.00",
    description: "Handcrafted tinted glass vase.",
    sellerName: "Studio Glass",
    sellerId: "studio-glass",
    image: "/products/seller6_1.webp",
    rating: 4.6,
    reviews: [{ name: "Ethan", text: "Looks gorgeous." }],
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = decodeURIComponent(String(rawId ?? "")).trim();
  const product = demoProducts[id];

  if (!product) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <h1>Product not found</h1>
          <p>Missing id: "{id}"</p>
          <Link href="/catalog">Back to catalog</Link>
        </div>
      </main>
    );
  }

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
                ★ {product.rating}{" "}
                <span className={styles.muted}>
                  ({product.reviews.length} reviews)
                </span>
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
                <Link
                  className={styles.sellerName}
                  href={`/sellers/${product.sellerId}`}
                >
                  {product.sellerName}
                </Link>
              </div>
              <Link
                className={styles.sellerLink}
                href={`/sellers/${product.sellerId}`}
              >
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
