import { AboutText } from "../../widgets/AboutText/AboutText";
import styles from "./AboutUs.module.css";

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1>О нас</h1>
      {/* <img src="about-us.png" alt="" width={150} height={59} /> */}
      <AboutText />
      <div className={styles.astrocont}>
        <img src="astronaut2.png" alt="" width={200} height={200} />
      </div>
    </div>
  );
};
