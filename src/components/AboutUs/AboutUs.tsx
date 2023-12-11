import { AboutText } from "../../widgets/AboutText/AboutText";
import { TriggerHeader } from "../../widgets/triger/triger";
import styles from "./AboutUs.module.css";

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <TriggerHeader className={styles.animcont}>
        <h1>О нас</h1>
      </TriggerHeader>
      <TriggerHeader>
        <AboutText />
      </TriggerHeader>
      <TriggerHeader className={styles.astrocont}>
        <img src="astronaut2.png" alt="" width={400} height={400} />
      </TriggerHeader>
    </div>
  );
};
