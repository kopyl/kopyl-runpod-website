"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ href, styles, children, closeMenu }: any) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={closeMenu}
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

export const Nav = ({ styles, closeMenu = () => {} }: any) => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navList}>
        <MenuLink href="/#stack" styles={styles} closeMenu={closeMenu}>
          My stack
        </MenuLink>
        <MenuLink href="/#models" styles={styles} closeMenu={closeMenu}>
          What models do I work with
        </MenuLink>
        <MenuLink href="/#aboutMe" styles={styles} closeMenu={closeMenu}>
          About me
        </MenuLink>
        <MenuLink href="/clients" styles={styles} closeMenu={closeMenu}>
          Trusted by
        </MenuLink>
      </div>
    </nav>
  );
};
