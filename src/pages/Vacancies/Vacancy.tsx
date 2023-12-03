import { useParams } from "react-router-dom";
import styles from "./Vacancy.module.css";
import { Header } from "../../widgets/Header/Header";
import { Affrods, VacList, TG, TGLst } from "../../widgets/Vacancies/VacList";
import { ErrorPage } from "../../widgets/ErrorPage/ErrorPage";

export const Vacancy = () => {
  const { id } = useParams();
  if (!id) {
    return (
      <ErrorPage props={"500 Internal Server Error. Can't load portfolio."} />
    );
  }
  const vacancy = VacList[+id - 1];
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.vacancy}>
        <h1>{vacancy.name}</h1>
        <div>
          <h2>Основные обязанности:</h2>
          <ul>
            {vacancy.tasks.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Основные требования:</h2>
          <ul>
            {vacancy.exp.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Мы предлагаем:</h2>
          <ul>
            {Affrods.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: 0 }}>
          <h2>{TG[0]}</h2>
          <h2>
            {TG[1]}
            <a href="https://t.me/webpegas" target="_blank">
              {TG[2]}
            </a>
          </h2>
          <ul>
            {TGLst.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

//
