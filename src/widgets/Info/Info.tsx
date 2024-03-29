import { CustomButton } from "../CustomButton/CustomButton";
import { TriggerHeader } from "../triger/triger";
import styles from "./Info.module.css";

export const Info = ({ show }: any) => {
  return (
    <div
      className={styles.containerinfo}
      style={show ? { display: "none" } : {}}
    >
      <TriggerHeader className={styles.animcont}>
        <h1>Digital-агентство</h1>
      </TriggerHeader>
      <div className={styles.agency}></div>
      <TriggerHeader className={styles.animconttxt}>
        <h2>Ваш надежный партнер в мире технологий</h2>
      </TriggerHeader>
      <TriggerHeader>
        <CustomButton>
          <span>Связаться с нами</span>
        </CustomButton>
      </TriggerHeader>
    </div>
  );
};
