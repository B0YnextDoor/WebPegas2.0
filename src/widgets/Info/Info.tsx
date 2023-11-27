import { CustomButton } from "../CustomButton/CustomButton";
import styles from "./Info.module.css";

export const Info = () => {
  return (
    <div className={styles.container}>
      {/* <h1>WebPegas</h1> */}
      <img src="/digitagency.svg" alt="" width={567} height={78} />
      <div className={styles.agency}></div>
      <h2>Ваш надежный партнер в мире технологий</h2>
      <CustomButton>
        <span>Связаться с нами</span>
      </CustomButton>
    </div>
  );
};
