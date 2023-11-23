import { ConnectForm } from "../../widgets/ConnectForm/ConnectForm";
import styles from "./ConnectWithUs.module.css";

export const ConnectWihtUs = () => {
  return (
    <div className={styles.container}>
      <img src="/connect.png" alt="" width={400} height={59} />
      <p>
        Свяжитесь с нами - мы подберем подходящие услуги и расскажем все
        подробности.
      </p>
      <div className={styles.astrocont}>
        <img src="/astronaut3.png" alt="" width={500} height={500} />
      </div>
      <ConnectForm />
    </div>
  );
};
