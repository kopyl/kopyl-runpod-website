import styles from "./buttons.module.sass";
import Link from "next/link";

export const SecondaryButton = ({ children, href, className }: any) => {
  return (
    <Link
      href={href}
      className={`${styles.secondaryButton} ${styles.button} ${className}`}
    >
      {children}
    </Link>
  );
};

export const PrimaryButton = ({ children, href, className }: any) => {
  return (
    <Link
      href={href}
      className={`${styles.primaryButton} ${styles.button} ${className}`}
    >
      {children}
    </Link>
  );
};
