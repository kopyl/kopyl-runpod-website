import Image from "next/image";
import styles from "./page.module.sass";
import { CenteredContainer, SideSafeArea } from "@components/util/util";

export default function Home() {
  return (
    <main className={styles.main}>
      <SideSafeArea>
        <CenteredContainer></CenteredContainer>
      </SideSafeArea>
    </main>
  );
}
