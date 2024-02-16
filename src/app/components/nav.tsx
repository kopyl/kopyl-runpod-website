"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ href, styles, children }: any) => {
  const pathname = usePathname();
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

export const Nav = ({ styles }: any) => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navList}>
        <MenuLink href="/#models" styles={styles}>
          What models do I work with
        </MenuLink>
        <MenuLink href="/clients" styles={styles}>
          Trusted by
        </MenuLink>
        <MenuLink href="/#stack" styles={styles}>
          My stack
        </MenuLink>
      </div>
    </nav>
  );
};
