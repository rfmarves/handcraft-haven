import styles from "./page.module.css";
import { Suspense } from "react";
import RegisterForm from "./registerForm";

export default function RegisterPage() {
  return (
      <main className={styles.main}>
        <div className={styles.intro}>
          <h2>Create your account</h2>
        </div>
        <Suspense>
          <RegisterForm />
        </Suspense>
      </main>
  );
}
