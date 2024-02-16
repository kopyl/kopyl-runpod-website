import styles from "./buttons.module.sass";
import Link from "next/link";

export const SecondaryButton = ({ children, className }: any) => {
  return (
    <Link
      href="/contacts"
      className={`${styles.secondaryButton} ${styles.button} ${className}`}
    >
      {children}
    </Link>
  );
};

export const PrimaryButton = ({ children, className }: any) => {
  return (
    <Link
      href="/contacts"
      className={`${styles.primaryButton} ${styles.button} ${className}`}
    >
      {children}
    </Link>
  );
};
