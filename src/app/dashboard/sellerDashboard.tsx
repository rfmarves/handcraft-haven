import styles from "./dashboard.module.css";

export default function SellerDashboard({ user }: { user: any }) {
  return (
    <div>
      <h2 className={styles.sectionTitle}>Seller Dashboard</h2>
      <p>Welcome, {user.name}! Here you can manage your products and view your sales.</p>
      {/* Add seller-specific features here */}
    </div>
  );
}