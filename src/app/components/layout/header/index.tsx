"use client";
import { Nav } from "../../nav";
import styles from "./header.module.sass";
import Link from "next/link";
import Image from "next/image";
import { SecondaryButtonGrey } from "@/app/components/buttons";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import { Menu } from "@components/layout/menu";

export const Header = ({ searchParams }: any) => {
  return (
    <div className={styles.header}>
      <Menu menuOpen={searchParams.isMenuOpen === "true"} />
      <SideSafeArea className={styles.safeArea}>
        <CenteredContainer className={styles.headerContainer}>
          <Link href="/#home" className={styles.logotype}>
            <Image src="/logo.svg" alt="logo" width={20} height={23} priority />
            <p className={styles.type}>Kopyl Oleh</p>
          </Link>
          <Nav styles={styles} />
          <SecondaryButtonGrey
            className={styles.hireButton}
            href="https://docs.google.com/document/d/1RuSI_f3PZuqhJNZhgkKXx0V-BCQ-V2p2Hy4s4A1pwKQ"
          >
            My CV
          </SecondaryButtonGrey>
          <Link
            className={styles.burger}
            href="?isMenuOpen=true"
            scroll={false}
          >
            <Image
              src="/icons/burger.svg"
              alt="burger"
              width={24}
              height={24}
              priority
            />
          </Link>
        </CenteredContainer>
      </SideSafeArea>
    </div>
  );
};
