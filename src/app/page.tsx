import styles from "./page.module.css";
import HandcraftHeader from "./components/handcraft-header";
import HandcraftFooter from "./components/handcraft-footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HandcraftHeader />

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

                <div className={styles.heroMedia} aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured products</h2>
              <a className={styles.sectionLink} href="/catalog">View all</a>
            </div>

            <div className={styles.grid}>
              {[
                ["Handmade Ceramic Mug", "$28.00"],
                ["Leather Wallet", "$45.00"],
                ["Macramé Wall Hanging", "$60.00"],
                ["Wooden Jewelry Box", "$75.00"],
              ].map(([name, price]) => (
                <article key={name} className={styles.card}>
                  <div className={styles.cardImg} />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{name}</h3>
                    <p className={styles.cardMeta}>by Blake’s Studio · Ships worldwide</p>
                    <div className={styles.cardRow}>
                      <span className={styles.price}>{price}</span>
                      <a className={styles.cardBtn} href="/product/1">View</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Top artisan shops</h2>
              <a className={styles.sectionLink} href="/sellers">View all</a>
            </div>

            <div className={styles.gridSmall}>
              {["Blake’s Studio", "Confetti Boutique", "June’s Creations"].map((shop) => (
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

        <HandcraftFooter />
      </main>
    </div>
  );
}
