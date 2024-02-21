import styles from "./about-me-repository.module.sass";
import Image from "next/image";
import Link from "next/link";

export const Repository = ({ children, href }: any) => {
  return (
    <Link
      href={href}
      passHref
      className={styles.aboutMeRepository}
      target="_blank"
    >
      <p>{children}</p>
      <Image
        src="/grey-arrow-up.svg"
        alt="star"
        width={11}
        height={10}
        className={styles.greyArrow}
        priority
      />
      <Image
        src="/white-arrow-up.svg"
        alt="star"
        width={11}
        height={10}
        className={styles.whiteArrow}
        priority
      />
    </Link>
  );
};
