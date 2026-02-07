import styles from '../page.module.css';

export default function CatalogPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Product Catalog</h1>

      <p className={styles.subtitle}>
        Browse all handmade products available on the marketplace.
      </p>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.card}>Product placeholder</div>
          <div className={styles.card}>Product placeholder</div>
          <div className={styles.card}>Product placeholder</div>
          <div className={styles.card}>Product placeholder</div>
        </div>
      </section>
    </main>
  );
}
