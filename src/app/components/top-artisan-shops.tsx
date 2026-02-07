import styles from "../page.module.css";

export default function TopArtisanShops() {
    return (
        <section className={styles.sectionAlt}>
          <div className={styles.featuredContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Top artisan shops</h2>
              <a className={styles.sectionLink} href="/sellers">View all</a>
            </div>

            <div className={styles.gridSmall}>
              {["Blake´s Studio", "Confetti Boutique", "June’s Creations"].map((shop) => (
                <article key={shop} className={styles.sellerCard}>
                  <div className={styles.avatar} aria-hidden="true" />
                  <div>
                    <h3 className={styles.sellerTitle}>{shop}</h3>
                    <p className={styles.sellerMeta}>Handcrafted · Small batch · Quality focused</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
    )}