import { PlusCollection } from "./PlusCollection";
import styles from "./PlusList.module.css";

export const PlusList = () => {
  return (
    <div className={styles.pluslist}>
      {PlusCollection.map((el) => (
        <div key={el}>
          <p>{el}</p>
        </div>
      ))}
    </div>
  );
};
