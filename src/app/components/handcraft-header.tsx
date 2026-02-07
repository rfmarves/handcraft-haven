import Link from "next/link";
import Image from "next/image";
import styles from "./handcraft-header.module.css";

export default function HandcraftHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/handcraft-haven-logo.svg"
            alt="Handcraft Haven"
            width={160}
            height={40}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/catalog">Catalog</Link>
          <Link href="/sellers">Sellers</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login" className={styles.cta}>
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
}
