import styles from "./page.module.css";
import HandcraftHeader from "./components/handcraft-header";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <HandcraftHeader />
        </div>
      </main>
    </div>
  );
}
