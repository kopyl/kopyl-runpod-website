import styles from "./model-tile.module.sass";
import Image from "next/image";

export const ModelTile = ({
  children,
  className,
  iconName,
  subModelsList,
}: any) => {
  return (
    <div className={`${styles.tile} ${className}`}>
      <div className={styles.modelTileHeading}>
        <Image
          src={`model-icons/${iconName}.svg`}
          alt="backend"
          width={25}
          height={25}
        />
        <p>{children}</p>
      </div>
      <div className={styles.subModelsList}>
        {subModelsList.map((subModel: string, index: number) => (
          <div key={index} className={styles.subModel}>
            <p>{subModel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
