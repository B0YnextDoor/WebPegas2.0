import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <p>+7 928 928 92 28</p>
        ООО "ВЕБ-ПЕГАС", ИНН 0000000000 , ОГРН 0000000000
        <br />© 2023 webpegas.pro. Все права защищены.
      </div>
      <div className={styles.second}>
        *отправляя формы на данном сайте, вы даете согласие на обработку
        персональных данных в соответствии с 152-ФЗ
      </div>
    </div>
  );
};
