import styles from "./Info.module.css";

export const Info = () => {
  return (
    <div className={styles.container}>
      <img src="/digitagency.svg" alt="" width={567} height={78} />
      <div className={styles.agency}></div>
      <h2>Ваш надежный партнер в мире технологий</h2>
      <div className={styles.buttoncontainer}>
        <button>
          <span>Связаться с нами</span>
        </button>
      </div>
    </div>
  );
};
