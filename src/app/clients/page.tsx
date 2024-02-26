import styles from "./page.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";
import { ClientsTile } from "@components/pages/clients/clients-tile";
import type { Metadata } from "next";
import { Header } from "@/app/components/layout/header";

export const metadata: Metadata = {
  title: "Kopyl Oleh – Clients",
  description: "I train and deploy AI to RunPod",
};

export default function Clients({ params, searchParams }: any) {
  return (
    <main className={styles.main} id="home">
      <Header searchParams={searchParams} />
      <div className={styles.clients}>
        <SideSafeArea>
          <CenteredContainer>
            <h2 className={styles.title}>My clients</h2>
            <div className={styles.tiles}>
              <ClientsTile href="https://runpod.io/" title="RunPod">
                Deployed serverless model for generating videos “Deforum”
              </ClientsTile>
              <ClientsTile href="https://superlook.ai/" title="Super Look">
                Deployed serverless model for changing clothes on images
              </ClientsTile>
              <ClientsTile href="https://randomseed.co/" title="Random Seed">
                Deployed serverless model for generating images
              </ClientsTile>
              <ClientsTile href="https://insomnia.land/" title="Insomnia">
                Deployed serverless model for generating images
              </ClientsTile>
              <ClientsTile href="https://logojinn.com/" title="LogoJinn">
                Deployed serverless model for generating images
              </ClientsTile>
              <ClientsTile
                href="https://www.generativelabs.co/"
                title="Generative labs"
              >
                Deployed serverless model for generating images
              </ClientsTile>
              <ClientsTile href="https://crossdot.co/" title="Crossdot">
                Deployed serverless model for generating images
              </ClientsTile>
              <ClientsTile href="https://norae.ai/" title="norae.ai">
                Deployed serverless model for generating images
              </ClientsTile>
            </div>
          </CenteredContainer>
        </SideSafeArea>
      </div>
    </main>
  );
}
