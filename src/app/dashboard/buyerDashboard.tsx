import styles from "./dashboard.module.css";

export default function BuyerDashboard({ user }: { user: any }) {
  return (
    <div>
      <h2 className={styles.sectionTitle}>Buyer Dashboard</h2>
      <p>Welcome, {user.name}! Here you can browse products and view your orders.</p>
      {/* Add buyer-specific features here */}
    </div>
  );
}