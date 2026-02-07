
import styles from "../page.module.css";

export default function GetFeaturedProducts() {
  const productList = [
    { name: "Handmade Ceramic Mug", price: "$28.00" },
    { name: "Leather Wallet", price: "$45.00" },
    { name: "Macramé Wall Hanging", price: "$60.00" },
    { name: "Wooden Jewelry Box", price: "$75.00" },
  ];

  return (
    <>
      {productList.map(({ name, price }) => (
        <div key={name} className={styles.featuredCard}>
          <div className={styles.featuredCardImg} />
          <div className={styles.featuredCardBody}>
            <h3 className={styles.featuredCardTitle}>{name}</h3>
            <p className={styles.featuredCardMeta}>by Blake’s Studio · Ships worldwide</p>
            <div className={styles.featuredCardRow}>
              <span className={styles.featuredPrice}>{price}</span>
              <a className={styles.featuredCardBtn} href="/product/1">View</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}