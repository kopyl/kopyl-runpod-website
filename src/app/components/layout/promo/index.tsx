import styles from "./promo.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import Link from "next/link";

const PrimaryButton = ({ children, className }: any) => {
  return (
    <div className={`${styles.primaryButton} ${className}`}>{children}</div>
  );
};

export const Promo = ({ children }: any) => {
  return (
    <div className={styles.promo}>
      <SideSafeArea>
        <CenteredContainer>
          <Link className={styles.promoContainer} href="/contact">
            <h2 className={styles.promoTitle}>
              Let’s create AI magic together ✨
            </h2>
            <PrimaryButton className={styles.promoButton}>
              Book a call with me
            </PrimaryButton>
          </Link>
        </CenteredContainer>
      </SideSafeArea>
    </div>
  );
};
