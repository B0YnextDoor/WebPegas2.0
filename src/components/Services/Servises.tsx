import { ServicesList } from "../../widgets/ServicesList/ServisesList";
import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div className={styles.container}>
      <img src="/services.svg" alt="" width={186} height={59} />
      <ServicesList />
      <div className={styles.astrocont}>
        <img src="/astronaut.png" alt="" width={250} height={250} />
      </div>
    </div>
  );
};
