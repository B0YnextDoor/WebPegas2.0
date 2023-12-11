import { ServicesList } from "../../widgets/ServicesList/ServisesList";
import { TriggerHeader } from "../../widgets/triger/triger";
import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div className={styles.container}>
      <TriggerHeader className={styles.animcont}>
        <h1>Услуги</h1>
      </TriggerHeader>
      <TriggerHeader>
        <ServicesList />
      </TriggerHeader>
      <TriggerHeader className={styles.astrocont}>
        <img src="/astronaut.svg" alt="" width={300} height={300} />
      </TriggerHeader>
    </div>
  );
};
