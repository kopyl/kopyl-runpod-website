import styles from "./buttons.module.sass";
import Link from "next/link";
import Image from "next/image";

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

export const SecondaryButtonGrey = ({ children, href, className }: any) => {
  return (
    <Link
      href={href}
      className={`${styles.secondaryButtonGrey} ${styles.button} ${className}`}
      target="_blank"
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

export const CloseButton = ({ children, href, className, onClick }: any) => {
  return (
    <Link
      className={`${styles.closeButton} ${styles.button} ${className}`}
      onClick={onClick}
      href="?"
      scroll={false}
    >
      <Image src="/icons/close.svg" alt="close" width={11} height={11} />
      <p>{children}</p>
    </Link>
  );
};
