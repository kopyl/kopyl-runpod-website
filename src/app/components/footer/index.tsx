import styles from "./footer.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import Link from "next/link";

export const Footer = ({ children }: any) => {
  return (
    <div className={styles.footer}>
      <SideSafeArea>
        <CenteredContainer className={styles.footerDesktopContainer}>
          <span className={styles.info}>Designed & developed myself</span>
          <div className={styles.links}>
            <Link href="/contacts" className={styles.link}>
              LinkedIn
            </Link>
            <Link href="/privacy" className={styles.link}>
              WhatsApp
            </Link>
            <Link href="/terms" className={styles.link}>
              Telegram
            </Link>
            <Link href="/terms" className={styles.link}>
              Discord
            </Link>
            <Link href="/terms" className={styles.link}>
              Email
            </Link>
          </div>
          <span className={styles.info}>I’m not a RunPod employee</span>
        </CenteredContainer>
        <CenteredContainer className={styles.footerMobileContainer}>
          <div className={styles.links}>
            <div className={styles.linksColumn}>
              <Link href="/contacts" className={styles.link}>
                LinkedIn
              </Link>
              <Link href="/privacy" className={styles.link}>
                WhatsApp
              </Link>
              <Link href="/terms" className={styles.link}>
                Telegram
              </Link>
            </div>
            <div className={styles.linksColumn}>
              <Link href="/terms" className={styles.link}>
                Discord
              </Link>
              <Link href="/terms" className={styles.link}>
                Email
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <span className={styles.info}>I’m not a RunPod employee</span>
            <span className={styles.info}>Designed & developed myself</span>
          </div>
        </CenteredContainer>
      </SideSafeArea>
    </div>
  );
};
