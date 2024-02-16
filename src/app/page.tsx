import Image from "next/image";
import styles from "./page.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import { PrimaryButton, SecondaryButton } from "@components/buttons";
import { HeroBackgroundTop } from "@components/graphics/hero/background/top";
import { HeroBackgroundBottom } from "@components/graphics/hero/background/bottom";
import { ClientsTile } from "@components/clients-tile/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroTop}>
          <SideSafeArea>
            <CenteredContainer className={styles.heroTopContent}>
              <HeroBackgroundTop className={styles.heroBackgroundImageTop} />
              <h4 className={styles.heroGreeting}>
                Hi I’m a RunPod engineer 👋
              </h4>
              <h1 className={styles.heroTitle}>
                I train and deploy AI to RunPod
              </h1>
              <PrimaryButton className={styles.heroButton}>
                Book a call with me
              </PrimaryButton>
            </CenteredContainer>
          </SideSafeArea>
        </div>
        <div className={styles.heroBottom}>
          <SideSafeArea>
            <CenteredContainer>
              <div className={styles.clients}>
                <div className={styles.blurCircle} />
                <div className={styles.heading}>
                  <h3>My clients</h3>
                  <SecondaryButton>See more</SecondaryButton>
                </div>
                <div className={styles.tiles}>
                  <ClientsTile href="https://www.runpod.io/">
                    Runpod
                  </ClientsTile>
                  <ClientsTile href="https://superlook.ai/">
                    Super Look
                  </ClientsTile>
                  <ClientsTile href="https://randomseed.co/">
                    Random Seed
                  </ClientsTile>
                  <ClientsTile href="https://insomnia.land/">
                    Insomnia
                  </ClientsTile>
                  <ClientsTile href="https://logojinn.com/">
                    LogoJinn
                  </ClientsTile>
                </div>
              </div>
              <HeroBackgroundBottom
                className={styles.heroBackgroundImageBottom}
              />
            </CenteredContainer>
          </SideSafeArea>
        </div>
      </div>
      <div className={styles.stack} id="stack">
        <SideSafeArea>
          <CenteredContainer>
            <h2 className={styles.stackHeading}>My stack</h2>
            <div className={styles.stackTiles}>
              <div
                className={`${styles.stackRow} ${styles.stackBackendAndFrontend}`}
              >
                <div className={`${styles.stackTile} ${styles.stackBackend}`}>
                  Back
                </div>
                <div className={`${styles.stackTile} ${styles.stackFrontend}`}>
                  Front
                </div>
              </div>
              <div className={`${styles.stackRow} ${styles.stackMLAndCloud}`}>
                <div className={`${styles.stackTile} ${styles.stackML}`}>
                  ML
                </div>
                <div className={`${styles.stackTile} ${styles.stackCloud}`}>
                  Cloud
                </div>
              </div>
              <div className={`${styles.stackRow} ${styles.stackTest}`}>
                <div className={`${styles.stackTile} ${styles.stackTestOne}`}>
                  One
                </div>
                <div className={`${styles.stackTile} ${styles.stackTestTwo}`}>
                  Two
                </div>
                <div className={`${styles.stackTile} ${styles.stackTestThree}`}>
                  Three
                </div>
              </div>
            </div>
          </CenteredContainer>
        </SideSafeArea>
      </div>
    </main>
  );
}
