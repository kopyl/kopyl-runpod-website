import styles from "./hero.module.sass";
import Link from "next/link";
import Image from "next/image";

export const ClientsTile = ({ children, href }: any) => {
  return (
    <Link href={href} passHref className={styles.tile} target="_blank">
      <p className={styles.title}>{children}</p>
      <Image
        src="/icons/arrows/purple-arrow-up-right.svg"
        alt="arrow"
        width={9}
        height={9}
        className={styles.arrow}
        priority
      />
    </Link>
  );
};
