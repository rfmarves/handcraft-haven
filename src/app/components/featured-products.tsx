import styles from "../page.module.css";
import GetFeaturedProducts from "./get-featured-products";

export default function FeaturedProducts() {
    return (
        <section className={styles.featuredSection}>
          <div className={styles.featuredContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured products</h2>
              <a className={styles.sectionLink} href="/catalog">View all</a>
            </div>
            <div className={styles.featuredGrid}>
                <GetFeaturedProducts />
            </div>
          </div>
        </section>
    )}