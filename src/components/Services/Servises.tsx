import { ServicesList } from "../../widgets/ServicesList/ServisesList";
import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div className={styles.container}>
      <h1>Услуги</h1>
      {/* <img src="/services.svg" alt="" width={186} height={59} /> */}
      <ServicesList />
      <div className={styles.astrocont}>
        <img src="/astronaut.svg" alt="" width={300} height={300} />
      </div>
    </div>
  );
};
