import Image from "next/image";
import styles from "./page.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import { PrimaryButton, SecondaryButton } from "@components/buttons";
import { HeroBackgroundTop } from "@graphics/hero/background/top";
import { HeroBackgroundBottom } from "@graphics/hero/background/bottom";
import { ClientsTile } from "@/app/components/pages/home/clients-tile";
import { StackTile } from "@/app/components/pages/home/stack-tile";
import { ModelTile } from "@components/pages/home/model-tile";
import { Repository } from "@components/pages/home/about-me-repository";
import { Header } from "@/app/components/layout/header";
import Link from "next/link";

export default function Home({ params, searchParams }: any) {
  return (
    <main className={styles.main} id="home">
      <Header searchParams={searchParams} />
      <div className={styles.hero}>
        <div className={styles.heroTop}>
          <SideSafeArea>
            <CenteredContainer className={styles.heroTopContent}>
              <HeroBackgroundTop className={styles.heroBackgroundImageTop} />
              <h4 className={styles.heroGreeting}>Hi I’m a AI engineer 👋</h4>
              <h1 className={styles.heroTitle}>
                I train and integrate AI models <span>and tools</span>
              </h1>
              <PrimaryButton
                className={styles.heroButton}
                href="mailto:kopyloleh@gmail.com"
              >
                Send me an email
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
                  <SecondaryButton href="/clients">See more</SecondaryButton>
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
              <h2 className={styles.modelsTitle}>Models I train and deploy</h2>
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
        <div className={styles.aboutMe} id="aboutMe">
          <SideSafeArea>
            <CenteredContainer>
              <h2 className={styles.aboutMeTitle}>About me</h2>
              <div className={styles.aboutMeInfoTiles}>
                <div className={styles.aboutMeInfoTopTileRow}>
                  <div className={styles.aboutMeInfoTopLeftTileColumn}>
                    <div className={styles.aboutMeInfoOpenSourceTile}>
                      <div className={styles.aboutMeBlurCircle} />
                      <div className={styles.aboutMeOpenSourceTitle}>
                        <Image
                          src="/icons/about-me/github.svg"
                          alt="github"
                          width={25}
                          height={25}
                          priority
                        />
                        <h3>I contribute to open source</h3>
                      </div>
                      <div className={styles.aboutMeRepositories}>
                        <Repository href="https://github.com/AUTOMATIC1111/stable-diffusion-webui/pulls?q=is%3Apr+author%3Akopyl">
                          AUTOMATIC1111
                        </Repository>
                        <Repository href="https://github.com/huggingface/diffusers/pulls?q=is%3Apr+author%3Akopyl+">
                          Diffusers
                        </Repository>
                        <Repository href="https://github.com/siliconflow/onediff/pulls?q=is%3Apr+author%3Akopyl+">
                          onediff
                        </Repository>
                        <Repository href="https://github.com/PixArt-alpha/PixArt-alpha/pulls?q=is%3Apr+author%3Akopyl+">
                          PixArt
                        </Repository>
                      </div>
                    </div>
                    <div className={styles.aboutMeFromUkraine}>
                      <div className={styles.aboutMeBlurCircle} />
                      <h3>I’m from Ukraine 🇺🇦</h3>
                    </div>
                  </div>
                  <div className={styles.aboutMeRunpodWithCvAndGithubAndTitle}>
                    <div className={styles.gitHubAndCv}>
                      <ClientsTile href="https://github.com/kopyl/">
                        GitHub
                      </ClientsTile>
                      <ClientsTile href="https://docs.google.com/document/d/1RuSI_f3PZuqhJNZhgkKXx0V-BCQ-V2p2Hy4s4A1pwKQ">
                        My CV
                      </ClientsTile>
                    </div>
                    <div className={styles.aboutMeRunpod}>
                      <div className={styles.aboutMeBlurCircle} />
                      <div className={styles.aboutMeRunpodTitle}>
                        <Image
                          src="/icons/about-me/runpod.svg"
                          alt="runpod"
                          width={25}
                          height={27}
                          priority
                        />
                        <h3>I spent $2000+ on Runpod</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.aboutMeInfoBottomTileRow}>
                  <h3>I have 2 startups</h3>
                  <div className={styles.aboutMeStartups}>
                    <Link
                      href="https://logojinn.com/"
                      passHref
                      target="_blank"
                      className={styles.startup}
                    >
                      <div className={styles.startupTitle}>
                        <h4>logojinn.com</h4>
                        <Image
                          src="/icons/arrows/up-right/grey.svg"
                          alt="logojinn.com"
                          width={11}
                          height={10}
                          priority
                        />
                      </div>
                      <div className={styles.startupInfo}>
                        <p>61 paid users</p>
                        <p>16.5k total</p>
                      </div>
                    </Link>
                    <Link
                      href="https://idied.org/"
                      passHref
                      target="_blank"
                      className={styles.startup}
                    >
                      <div className={styles.startupTitle}>
                        <h4>idied.org</h4>
                        <Image
                          src="/icons/arrows/up-right/grey.svg"
                          alt="idied.org"
                          width={11}
                          height={10}
                          priority
                        />
                      </div>
                      <div className={styles.startupInfo}>
                        <p>2 paid users</p>
                        <p>487 total</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </CenteredContainer>
          </SideSafeArea>
        </div>
      </div>
    </main>
  );
}
