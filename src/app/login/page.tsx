import styles from "./page.module.css";
import LoginForm from './login-form';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
     <div className={styles.formHeader}><h1>Handcraft Haven</h1></div>
     <div className={styles.formContainer}>
      <Suspense>
        <LoginForm />
      </Suspense>
     </div>
    </div>
    );
}
