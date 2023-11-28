import styles from "./Footer.module.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import { YouTube } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        ООО "ВЕБ-ПЕГАС", ИНН 5300004679, ОГРН 1225300002597
        <br />© 2023 webpegas.pro. Все права защищены.
      </div>
      <div className={styles.socnets}>
        <div>
          <TelegramIcon color="inherit" />
          <a target="_blank" href="https://t.me/webpeegas" rel="noreferrer">
            Telegram
          </a>
        </div>
        <div>
          <img src="/vk.svg" alt="" style={{ maxWidth: "20px" }} />
          <a
            target="_blank"
            href="https://vk.com/webpegas_ru"
            rel="noreferrer"
            className="ms-1"
          >
            VK
          </a>
        </div>
        <div>
          <YouTube color="inherit" />
          <a
            target="_blank"
            href="https://rutube.ru/channel/33470918/"
            rel="noreferrer"
          >
            RuTube
          </a>
        </div>
      </div>
      <div className={styles.second}>
        <LocalPhoneIcon />
        +7 499 325 45 25
      </div>
    </div>
  );
};
