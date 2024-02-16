import Image from "next/image";
import styles from "./page.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import { PrimaryButton } from "@components/buttons";
import { HeroBackgroundTop } from "@components/graphics/hero/background/top";
import { HeroBackgroundBottom } from "@components/graphics/hero/background/bottom";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <SideSafeArea>
          <CenteredContainer className={styles.heroContent}>
            <HeroBackgroundTop className={styles.heroBackgroundImageTop} />
            <HeroBackgroundBottom
              className={styles.heroBackgroundImageBottom}
            />
            <h5 className={styles.heroGreeting}>Hi I’m a RunPod engineer 👋</h5>
            <h1 className={styles.heroTitle}>
              I train and deploy AI models to RunPod
            </h1>
            <PrimaryButton className={styles.heroButton}>
              Book a call with me
            </PrimaryButton>
          </CenteredContainer>
        </SideSafeArea>
      </div>
    </main>
  );
}
