import { slides } from "./ReviewList";
import styles from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

export const Reviews = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const nav = useMediaQuery("(max-width: 400px)");
  return (
    <div className={styles.container}>
      <h1>Отзывы</h1>
      <div className={styles.slidercont}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={!nav}
          pagination={{
            enabled: nav,
            type: "bullets",
            dynamicBullets: true,
          }}
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={matches}
          slidesPerView={matches ? 1 : 2}
          className={styles.swiper}
        >
          {slides.map((el, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.card}>
                <div style={{ height: "15%" }}>
                  <span>{el.name}</span>
                </div>
                <div
                  style={{
                    border: "1px solid rgba(6, 212, 231, 1)",
                    width: "90%",
                    marginLeft: "5%",
                  }}
                ></div>
                <div className={styles.boxval}>{el.value}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// {matches ? (

//   ) : (
//     <Swiper
//       modules={[EffectCards]}
//       effect={"cards"}
//       cardsEffect={{ slideShadows: false }}
//       loop={true}
//       grabCursor={true}
//       className={styles.swiper}
//     >
//       {slides.map((el, idx) => (
//         <SwiperSlide key={idx}>
//           <div className={styles.card}>
//             <div style={{ textAlign: "center" }}>
//               <span style={{ fontWeight: 600, color: "black" }}>
//                 {el.name}
//               </span>
//             </div>
//             <div style={{ border: "1px solid #7737ff" }}></div>
//             <div className={styles.boxval}>{el.value}</div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )}
