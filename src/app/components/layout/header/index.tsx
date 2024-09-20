import { Nav } from "../../nav";
import styles from "./header.module.sass";
import Link from "next/link";
import Image from "next/image";
import { SecondaryButton } from "@/app/components/buttons";
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
          <p className={styles.heroGreeting}>Hi I’m a AI engineer 👋</p>
          <SecondaryButton
            className={styles.hireButton}
            href="mailto:kopyloleh@gmail.com"
          >
            Email me
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
