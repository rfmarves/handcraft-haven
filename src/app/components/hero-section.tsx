import styles from "../page.module.css";

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroWrap}>
              <div className={styles.heroGrid}>
                <div>
                  <p className={styles.kicker}>Curated handmade marketplace</p>
                  <h1 className={styles.heroTitle}>Explore. Create. Share.</h1>
                  <p className={styles.heroSubtitle}>
                    A premium marketplace connecting independent artisans with customers who value authentic craft.
                  </p>

                  <div className={styles.heroActions}>
                    <a className={styles.primaryBtn} href="/register">Become a seller</a>
                    <a className={styles.secondaryBtn} href="/catalog">Browse products</a>
                  </div>

                  <div className={styles.trustRow}>
                    <div className={styles.trustItem}>
                      <p className={styles.trustTop}>Quality-first</p>
                      <p className={styles.trustBottom}>Curated listings & craftsmanship</p>
                    </div>
                    <div className={styles.trustItem}>
                      <p className={styles.trustTop}>Secure checkout</p>
                      <p className={styles.trustBottom}>Payments, reviews, and trust</p>
                    </div>
                    <div className={styles.trustItem}>
                      <p className={styles.trustTop}>Support creators</p>
                      <p className={styles.trustBottom}>Independent artisans worldwide</p>
                    </div>
                  </div>
                </div>

                <div className={styles.heroMedia}>
  <img src="/hero/hero3.png" alt="Hero image" />
</div>

              </div>
            </div>
          </div>
        </section>
    )}