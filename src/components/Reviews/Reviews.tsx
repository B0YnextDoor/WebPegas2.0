import { slides } from "./ReviewList";
import styles from "./Reviews.module.css";

export const Reviews = () => {
  return (
    <div className={styles.container}>
      <h1>Отзывы</h1>
      <div className={styles.feedcont}>
        {slides.map((el, ind) => (
          <FeedBackBox key={ind} name={el.name} value={el.value} />
        ))}
      </div>
    </div>
  );
};

const FeedBackBox = ({ name, value }: any) => {
  return (
    <div className={styles.feedbox}>
      <div
        style={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontWeight: 600, color: "black" }}>{name}</span>
      </div>
      <div style={{ border: "1px solid #7737ff" }}></div>
      <div className={styles.boxval}>{value}</div>
    </div>
  );
};
