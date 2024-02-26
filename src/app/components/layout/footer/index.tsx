import styles from "./footer.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import Link from "next/link";

const links = [
  [
    { title: "LinkedIn", href: "/contacts" },
    { title: "WhatsApp", href: "/privacy" },
    { title: "Telegram", href: "/terms" },
  ],
  [
    { title: "Discord", href: "/terms" },
    { title: "Email", href: "/terms" },
  ],
];

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <SideSafeArea>
        <CenteredContainer className={styles.footerDesktopContainer}>
          <span className={styles.info}>Designed & developed myself</span>
          <div className={styles.links}>
            {links.flat().map((link, index) => (
              <Link href={link.href} key={index} className={styles.link}>
                {link.title}
              </Link>
            ))}
          </div>
          <span className={styles.info}>I’m not a RunPod employee</span>
        </CenteredContainer>
        <CenteredContainer className={styles.footerMobileContainer}>
          <div className={styles.links}>
            <div className={styles.linksColumn}>
              {links[0].map((link, index) => (
                <Link href={link.href} key={index} className={styles.link}>
                  {link.title}
                </Link>
              ))}
            </div>
            <div className={styles.linksColumn}>
              {links[1].map((link, index) => (
                <Link href={link.href} key={index} className={styles.link}>
                  {link.title}
                </Link>
              ))}
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
