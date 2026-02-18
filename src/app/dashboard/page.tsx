import styles from "./dashboard.module.css";
import postgres from "postgres";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import LogoutForm from "./logoutForm";
import { fetchUserByEmail } from "../lib/data";
import SellerDashboard from "./sellerDashboard";
import BuyerDashboard from "./buyerDashboard";

export const metadata: Metadata = {
  title: 'User Dashboard',
};

export default async function UserDashboard() {
  const session = await auth();
  if (!session) {
    redirect('/login');
  } else {
    const sql = postgres(process.env.POSTGRES_PRISMA_URL!);
    const currentUser = await fetchUserByEmail(session.user.email);
    return (
      <div>
        <h1 className={styles.dasboardTitle}>{currentUser.name}'s Dashboard</h1>
        {currentUser.role === 'seller' ? (
          <SellerDashboard user={currentUser} />
        ) : (
          <BuyerDashboard user={currentUser} />
        )}
        <LogoutForm />
      </div>
    );
  }
}