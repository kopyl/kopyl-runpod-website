import styles from "./footer.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import Link from "next/link";

export const Footer = ({ children }: any) => {
  return (
    <div className={styles.footer}>
      <SideSafeArea>
        <CenteredContainer>
          <p className={styles.footerText}>
            © 2021 Kopyl Oleh. All rights reserved.
          </p>
          <Link href="/privacy" className={styles.privacy}>
            Privacy Policy
          </Link>
        </CenteredContainer>
      </SideSafeArea>
    </div>
  );
};
