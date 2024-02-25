"use client";

import styles from "./menu.module.sass";
import Image from "next/image";
import { SideSafeArea } from "@components/util/util";
import { CloseButton } from "@components/buttons";
import Link from "next/link";
import { Nav } from "@components/nav";
import { PrimaryButton } from "@components/buttons";

export const Menu = ({ menuOpen, toggleMenu }: any) => {
  return (
    <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <Link className={styles.logotype} onClick={toggleMenu} href="/#home">
          <Image src="/logo.svg" alt="logo" width={20} height={23} priority />
          <p className={styles.type}>Kopyl Oleh</p>
        </Link>
        <CloseButton onClick={toggleMenu}>Close</CloseButton>
      </div>
      <SideSafeArea className={styles.mainContainer}>
        <Nav styles={styles} closeMenu={toggleMenu} />
        <div className={styles.footer}>
          <PrimaryButton
            className={styles.heroButton}
            href="mailto:kopyloleh@gmail.com"
          >
            Send me an email
          </PrimaryButton>
        </div>
      </SideSafeArea>
    </div>
  );
};
