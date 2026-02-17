import Link from "next/link";
import styles from "./dashboard-add.module.css";

export default function DashboardAddPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Add Product</h1>
            <p className={styles.subtitle}>
              Create a new listing for your handmade product.
            </p>
          </div>

          <Link className={styles.backLink} href="/dashboard/products">
            ← Back to My Products
          </Link>
        </header>

        <form className={styles.form}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Product name
              </label>
              <input
                className={styles.input}
                id="name"
                name="name"
                type="text"
                placeholder="e.g., Handmade Ceramic Mug"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="price">
                Price
              </label>
              <input
                className={styles.input}
                id="price"
                name="price"
                type="text"
                placeholder="e.g., 28.00"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="category">
                Category
              </label>
              <select className={styles.input} id="category" name="category">
                <option>Home & Living</option>
                <option>Accessories</option>
                <option>Art</option>
                <option>Jewelry</option>
                <option>Gifts</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="status">
                Status
              </label>
              <select className={styles.input} id="status" name="status">
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label className={styles.label} htmlFor="imageUrl">
                Image URL (or use an existing path)
              </label>
              <input
                className={styles.input}
                id="imageUrl"
                name="imageUrl"
                type="text"
                placeholder='e.g., /products/seller1_1.webp'
              />
              <p className={styles.help}>
                Tip: you already have demo images in <code>/public/products</code>.
              </p>
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label className={styles.label} htmlFor="description">
                Description
              </label>
              <textarea
                className={styles.textarea}
                id="description"
                name="description"
                placeholder="Write a short, clear description of your product..."
                rows={6}
                required
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.primaryBtn} type="submit">
              Save product
            </button>
            <button className={styles.secondaryBtn} type="button">
              Cancel
            </button>
          </div>

          <p className={styles.note}>
            This is a UI placeholder. Later we will connect it to the database and
            save the product using server actions or an API route.
          </p>
        </form>
      </div>
    </main>
  );
}
