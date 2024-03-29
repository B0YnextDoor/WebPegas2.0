import { ServicesCollection } from "./ServicesCollection";
import styles from "./ServicesList.module.css";
import { Link } from "react-router-dom";

export const ServicesList = () => {
  return (
    <div className={styles.serviceslist}>
      {ServicesCollection.map((el) => (
        <div className={styles.service} key={el.picPath}>
          <img src={el.picPath} alt="" width={50} height={50} />
          <Link to={`portfolio/${el.id}`}>{el.header}</Link>
          <div>
            <p>{el.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
