import { AboutText } from "../../widgets/AboutText/AboutText";
import styles from "./AboutUs.module.css";

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <img src="about-us.png" alt="" width={150} height={59} />
      <AboutText />
      <div className={styles.astrocont}>
        <img src="astronaut2.png" alt="" width={350} height={350} />
      </div>
    </div>
  );
};
