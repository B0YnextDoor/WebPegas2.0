import { AdInfo } from "../../widgets/AdInfo/AdInfo";
import { Header } from "../../widgets/Header/Header";
import { Info } from "../../widgets/Info/Info";
import styles from "./MainInfo.module.css";
import { useState } from "react";

export const MainInfo = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <Header show={show} setShow={setShow} />
      <Info show={show} />
      <AdInfo show={show} />
    </div>
  );
};
