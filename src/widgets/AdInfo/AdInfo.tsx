import { TriggerHeader } from "../triger/triger";
import styles from "./AdInfo.module.css";
import { AdInfoCollection } from "./AdInfoCollection";

export const AdInfo = () => {
  return (
    <TriggerHeader>
      <div className={styles.container}>
        {AdInfoCollection.map((el) => (
          <div key={el.info}>
            <img src={el.picPath} alt="" width={30} height={30} />
            <p>{el.info}</p>
          </div>
        ))}
      </div>
    </TriggerHeader>
  );
};
