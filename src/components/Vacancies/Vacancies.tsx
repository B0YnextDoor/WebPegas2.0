import { VacanciesList } from "../../widgets/Vacancies/VacanciesList";
import styles from "./Vacancies.module.css";

export const Vacancies = () => {
  return (
    <div className={styles.container}>
      <h1>Вакансии</h1>
      <h2>Присоединяйся к нашей команде!</h2>
      <VacanciesList />
    </div>
  );
};
