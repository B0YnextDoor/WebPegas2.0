import { slides } from "./ReviewList";
import styles from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectFade, Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

export const Reviews = () => {
  const matches = useMediaQuery("(max-width: 530px)");
  return (
    <div className={styles.container}>
      <h1>Отзывы</h1>
      <div className={styles.slidercont}>
        {matches ? (
          <Swiper
            modules={[EffectFade, Navigation]}
            navigation={true}
            loop={true}
            grabCursor={true}
            slidesPerView={1}
            width={250}
            effect={"fade"}
          >
            {slides.map((el, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.card}>
                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontWeight: 600, color: "black" }}>
                      {el.name}
                    </span>
                  </div>
                  <div style={{ border: "1px solid #7737ff" }}></div>
                  <div className={styles.boxval}>{el.value}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            modules={[EffectCards]}
            effect={"cards"}
            cardsEffect={{ slideShadows: false }}
            loop={true}
            grabCursor={true}
            className={styles.swiper}
          >
            {slides.map((el, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.card}>
                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontWeight: 600, color: "black" }}>
                      {el.name}
                    </span>
                  </div>
                  <div style={{ border: "1px solid #7737ff" }}></div>
                  <div className={styles.boxval}>{el.value}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
