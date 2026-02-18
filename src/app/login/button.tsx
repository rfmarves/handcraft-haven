
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

import styles from "./form.module.css";

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={styles.button}
    >
      {children}
    </button>
  );
}
