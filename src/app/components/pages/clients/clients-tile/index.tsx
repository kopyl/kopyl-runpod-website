import styles from "./clients-tile.module.sass";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";

export const ClientsTile = ({ children, href, title }: any) => {
  return (
    <Link href={href} passHref className={styles.tile} target="_blank">
      <div className={styles.title}>
        <p>{title}</p>
        <Image
          src="/icons/arrows/up-right/grey.svg"
          alt="arrow"
          width={11}
          height={10}
          className={styles.arrow}
          priority
        />
      </div>
      <p className={styles.description}>{children}</p>
    </Link>
  );
};
