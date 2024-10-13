"use client";
import { Nav } from "../../nav";
import styles from "./header.module.sass";
import Link from "next/link";
import Image from "next/image";
import { SecondaryButton } from "@/app/components/buttons";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import { Menu } from "@components/layout/menu";
import { useState, useEffect } from "react";

export const Header = ({ searchParams }: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    let position = window.pageYOffset;
    if (position > 10) {
      position = 55;
    } else {
      position = 0;
    }
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

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
          <p
            className={styles.heroGreeting}
            style={{ position: "relative", top: `-${scrollPosition}px` }}
          >
            Hi I’m a AI engineer 👋
          </p>
          <SecondaryButton
            className={styles.hireButton}
            href="https://docs.google.com/document/d/1RuSI_f3PZuqhJNZhgkKXx0V-BCQ-V2p2Hy4s4A1pwKQ"
          >
            My CV
          </SecondaryButton>
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
