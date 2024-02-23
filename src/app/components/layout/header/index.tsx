import { Nav } from "../../nav";
import styles from "./header.module.sass";
import Link from "next/link";
import Image from "next/image";
import { SecondaryButton } from "@/app/components/buttons";
import { CenteredContainer, SideSafeArea } from "@components/util/util";

export const Header = () => {
  return (
    <div className={styles.header}>
      <SideSafeArea className={styles.safeArea}>
        <CenteredContainer className={styles.headerContainer}>
          <Link href="/#home" className={styles.logotype}>
            <Image src="/logo.svg" alt="logo" width={22} height={24} priority />
            <p className={styles.type}>Kopyl Oleh</p>
          </Link>
          <Nav styles={styles} />
          <p className={styles.heroGreeting}>Hi I’m a RunPod engineer 👋</p>
          <SecondaryButton
            className={styles.hireButton}
            href="mailto:kopyloleh@gmail.com"
          >
            Email me
          </SecondaryButton>
          <button className={styles.burger}>
            <Image
              src="/icons/burger.svg"
              alt="burger"
              width={24}
              height={24}
              priority
            />
          </button>
        </CenteredContainer>
      </SideSafeArea>
    </div>
  );
};
