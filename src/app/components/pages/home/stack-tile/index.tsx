import styles from "./stack-tile.module.sass";
import Image from "next/image";

export const StackTile = ({
  children,
  className,
  iconName,
  techList,
  blurColor,
}: any) => {
  return (
    <div className={`${styles.tile} ${className}`}>
      <div
        className={styles.stackBlurCircle}
        style={
          {
            "--color-blur": blurColor,
          } as React.CSSProperties
        }
      />
      <div className={styles.stackTileHeading}>
        <Image
          src={`icons/stack/${iconName}.svg`}
          alt="backend"
          width={25}
          height={25}
          priority
        />
        <p>{children}</p>
      </div>
      <div className={styles.techList}>
        {techList.map((tech: string, index: number) => (
          <div key={index} className={styles.tech}>
            <p>{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
