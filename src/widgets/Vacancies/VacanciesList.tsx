import { useNavigate } from "react-router-dom";
import { VacList } from "./VacList";
import styles from "./VacanciesList.module.css";

export const VacanciesList = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.vaclist}>
      {VacList.map((el, index) => (
        <button key={index} onClick={() => navigate(`/vacancy/${index + 1}`)}>
          {el.name}
        </button>
      ))}
    </div>
  );
};
