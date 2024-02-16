import { Nav } from "../nav";
import styles from "./header.module.sass";
import Link from "next/link";
import Image from "next/image";
import { SecondaryButton } from "@/app/components/buttons";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logotype}>
        <Image src="/logo.svg" alt="logo" width={22} height={24} />
        <p>Kopyl Oleh</p>
      </Link>
      <Nav styles={styles} />
      <SecondaryButton>Hire me</SecondaryButton>
    </div>
  );
};
