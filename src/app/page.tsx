import Image from "next/image";
import styles from "./page.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import { PrimaryButton, SecondaryButton } from "@components/buttons";
import { HeroBackgroundTop } from "@components/graphics/hero/background/top";
import { HeroBackgroundBottom } from "@components/graphics/hero/background/bottom";
import { ClientsTile } from "@components/clients-tile/hero";
import { StackTile } from "@components/stack-tile";
import { ModelTile } from "@components/model-tile";

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
            <h2 className={styles.stackTitle}>My stack</h2>
            <div className={styles.stackTiles}>
              <div
                className={`${styles.stackRow} ${styles.stackBackendAndFrontend}`}
              >
                <StackTile
                  className={styles.stackBackend}
                  iconName="backend"
                  techList={[
                    "RunPod",
                    "Python",
                    "Docker",
                    "MongoDB",
                    "Next.js",
                  ]}
                  blurColor="#824FDC"
                >
                  Backend
                </StackTile>
                <StackTile
                  className={styles.stackFrontend}
                  iconName="frontend"
                  techList={["Next.js", "Angular"]}
                  blurColor="#DCB54F"
                >
                  Frontend
                </StackTile>
              </div>
              <div className={`${styles.stackRow} ${styles.stackMLAndCloud}`}>
                <StackTile
                  className={styles.stackML}
                  iconName="ml"
                  techList={["PyTorch"]}
                  blurColor="#DC4F71"
                >
                  ML
                </StackTile>
                <StackTile
                  className={styles.stackCloud}
                  iconName="cloud"
                  techList={["AWS", "Azure", "Google Could"]}
                  blurColor="#4EA0DC"
                >
                  Cloud
                </StackTile>
              </div>
            </div>
          </CenteredContainer>
        </SideSafeArea>
        <div className={styles.models} id="models">
          <SideSafeArea>
            <CenteredContainer>
              <h2 className={styles.modelsTitle}>Models I deploy and train</h2>
              <div className={styles.modelTiles}>
                <ModelTile
                  className={styles.modelTile}
                  iconName="image"
                  subModelsList={[
                    "Stable Diffusion",
                    "ControlNet",
                    "Image classification",
                    "Object detection (YOLO)",
                  ]}
                >
                  Image
                </ModelTile>
                <ModelTile
                  className={styles.modelTile}
                  iconName="text"
                  subModelsList={[
                    "LLM",
                    "Speech to text",
                    "Text to speech",
                    "Text classification",
                  ]}
                >
                  Text
                </ModelTile>
                <ModelTile
                  className={styles.modelTile}
                  iconName="other"
                  subModelsList={[
                    "Recommender systems",
                    "Speech to speech",
                    "Anything you can find on HuggingFace",
                  ]}
                >
                  Other
                </ModelTile>
              </div>
            </CenteredContainer>
          </SideSafeArea>
        </div>
      </div>
    </main>
  );
}
