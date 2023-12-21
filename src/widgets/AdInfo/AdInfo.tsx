import { TriggerHeader } from "../triger/triger";
import styles from "./AdInfo.module.css";
import { AdInfoCollection } from "./AdInfoCollection";

export const AdInfo = ({ show }: any) => {
  return (
    <TriggerHeader>
      <div className={styles.container} style={show ? { display: "none" } : {}}>
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
