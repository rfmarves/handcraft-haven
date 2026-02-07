import Link from "next/link";
import Image from "next/image";
import styles from "./handcraft-footer.module.css";

export default function HandcraftFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.brandRow}>
            <Image
              src="/handcraft-haven-logo.svg"
              alt="Handcraft Haven"
              width={150}
              height={36}
            />
          </div>
          <p className={styles.tagline}>
            A curated marketplace for handmade goods — built for artisans and customers who value craft.
          </p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4>Marketplace</h4>
            <Link href="/catalog">Catalog</Link>
            <Link href="/sellers">Sellers</Link>
            <Link href="/cart">Cart</Link>
          </div>

          <div className={styles.col}>
            <h4>Account</h4>
            <Link href="/login">Log in</Link>
            <Link href="/register">Become a seller</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Handcraft Haven. All rights reserved.
      </div>
    </footer>
  );
}
