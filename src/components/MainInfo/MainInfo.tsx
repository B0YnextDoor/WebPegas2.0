import { AdInfo } from "../../widgets/AdInfo/AdInfo";
import { Header } from "../../widgets/Header/Header";
import { Info } from "../../widgets/Info/Info";
import styles from "./MainInfo.module.css";

export const MainInfo = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Info />
      <AdInfo />
    </div>
  );
};
