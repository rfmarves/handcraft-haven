import styles from "./page.module.css";
import HandcraftHeader from "./components/handcraft-header";
import HandcraftFooter from "./components/handcraft-footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HandcraftHeader />
        <div className={styles.intro}>
          <h2>Welcome to Handcraft Haven!</h2>
          <p>Your one-stop shop for unique, handmade crafts.</p>
        </div>
        <div className={styles.content}>
        </div>
      <HandcraftFooter />
      </main>
    </div>
  );
}
