import { useState } from "react";
import styles from "./Vacancies.module.css";

export const Vacancies = () => {
  const [isShown, setShown] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <h1>Вакансии</h1>
      {/* <h2>Присоединяйся к нашей команде!</h2> */}
      {/* <VacanciesList /> */}
      <div className={styles.vacancy}>
        <div className={styles.namehandler}>
          <span>ML инженер(Python)</span>
          <button onClick={() => setShown(!isShown)}>
            <img
              style={isShown ? {} : { transform: "rotate(180deg)" }}
              src="/btn.svg"
              alt=""
              width={45}
              height={45}
            />
          </button>
        </div>
        <div className={styles.text} style={isShown ? {} : { display: "none" }}>
          <p>Обязанности:</p>
          <p>
            Image classification, object detection, semantic segmentation, в том
            числе подходы Zero-Shot, One-Shot и Few-Shot Learning.
            <br />
            Image similarity search.
            <br />
            OCR (Распознавание текста с изображений).
            <br />
            Pose estimation.
            <br />
            Классические алгоритмы компьютерного зрения.
          </p>
          <p>Требования:</p>
          <p>
            Опыт работы или практических проектов в области машинного обучения
            или опыт участия в прикладных исследованиях с математическим
            моделированием
            <br /> Глубокое понимание математических оснований машинного
            обучения и анализа данных
            <br /> Знание метрик оценки качества моделей
            <br />
            Знание базовых структур данных и алгоритмов, способность оценивать
            скорость работы алгоритмов
            <br /> Опыт работы с реляционными базами данными Python, Numpy,
            Pandas, Scikit-learn, XGBoost/CatBoost, PyTorch, HuggingFace
            Transformers, SQL, Bash
            <br /> Понимание основ сетевых технологий
            <br /> Умение конвертировать модели в ONNX и TensorRT
            <br /> Опыт работы с Nvidia Triton
            <br /> Знание MLFlow и/или ClearML <br />
            Знание CI/CD
            <br />
            Наличие проектов на GitHub или соревнований на Kaggle, на которые
            можно посмотреть
            <br /> Опыт реализации подходов из научных статей
            <br />
            Проактивность, готовность вникать в задачу
            <br /> Качественный чистый код
          </p>
          <p>
            Готов откликнуться на нашу вакансию?
            <br />
            Пиши нам в{" "}
            <a
              href="https://t.me/webpegas"
              target="_blank"
              style={{
                fontWeight: 800,
                color: "rgba(208, 100, 255, 1)",
              }}
            >
              Telegram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
