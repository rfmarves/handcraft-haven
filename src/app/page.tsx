import styles from "./page.module.css";


import HeroSection from "./components/hero-section";
import FeaturedProducts from "./components/featured-products";
import TopArtisanShops from "./components/top-artisan-shops";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      
        <HeroSection />
        <FeaturedProducts />
        <TopArtisanShops />
        
      </main>
    </div>
  );
}
