"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = ({ styles }: any) => {
  const pathname = usePathname();

  const MenuLink = ({ href, children }: any) => {
    return (
      <Link
        href={href}
        passHref
        className={`${styles.navLink} ${
          `${pathname}` === href ? styles.active : ""
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navList}>
        <MenuLink href="/#models">What models do I work with</MenuLink>
        <MenuLink href="/clients">Trusted by</MenuLink>
        <MenuLink href="/#stack">My stack</MenuLink>
      </div>
    </nav>
  );
};
