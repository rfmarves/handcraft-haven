'use client';

import styles from "./form.module.css";
import { 
    HiAtSymbol,
    HiKey,
    HiMiniExclamationCircle
  } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <form action={formAction} className={styles.form}>
      <div>
        <h1 className={styles.formTitle}>
          Please log in to continue.
        </h1>
        <div>
          <div className={styles.relative}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                className={styles.input}
                required
              />
              <HiAtSymbol className={styles.inputIcon} />
            </div>
          </div>
          <div className={styles.relative}>
            <label
              htmlFor="password"
              className={styles.label}
            >
              Password
            </label>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                className={styles.input}
                required
                minLength={6}
              />
              <HiKey className={styles.inputIcon} />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button aria-disabled={isPending}>
          Log in <FaArrowRight />
        </Button>
        <div
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <HiMiniExclamationCircle />
              <p >{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
