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
      {/* <h3>Социальные сети</h3>
      <div className="socnetws">
        <div>
          <TelegramIcon color="inherit" />
          <a target="_blank" href="https://t.me/webpeegas" rel="noreferrer">
            Telegram
          </a>
        </div>
        <div>
          <img src="/vk.svg" alt="" style={{ maxWidth: "20px" }} />
          <a target="_blank" href="https://vk.com/webpegas_ru" rel="noreferrer">
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
      </div> */}
    </div>
  );
};
