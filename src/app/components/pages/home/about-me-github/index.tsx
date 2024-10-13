import styles from "./about-me-github.module.sass";
import Link from "next/link";
import Image from "next/image";

export const AboutMeGithub = ({ children, href, className }: any) => {
  return (
    <Link
      href={href}
      passHref
      className={`${styles.tile} ${className}`}
      target="_blank"
    >
      <p className={styles.title}>{children}</p>
      <Image
        src="/icons/arrows/up-right/grey.svg"
        alt="star"
        width={11}
        height={10}
        className={styles.greyArrow}
        priority
      />
    </Link>
  );
};
