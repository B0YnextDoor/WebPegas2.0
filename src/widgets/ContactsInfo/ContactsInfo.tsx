import styles from "./ContactsInfo.module.css";
import { InfoCollection } from "./InfoCollection";

export const ContactsInfo = () => {
  return (
    <div className={styles.container}>
      {InfoCollection.map((el) => (
        <div key={el.text}>
          <h3>{el.text}</h3>
          <p>{el.value}</p>
        </div>
      ))}
    </div>
  );
};
