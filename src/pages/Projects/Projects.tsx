import styles from "./Projects.module.css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Virtual,
  Pagination,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import { Header } from "../../widgets/Header/Header";
import { slides } from "./ProjectList";
import { useParams } from "react-router-dom";
import { Trigger } from "../../widgets/triger/triger";
import { useState } from "react";

export const Projects = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <Header show={show} setShow={setShow} />
      <Trigger>
        <div
          style={
            show
              ? { display: "none" }
              : {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundImage: "url('/portfoliobckground.jpg')",
                  backgroundPosition: "center",
                }
          }
        >
          <Swiper
            onSwiper={(swiper) => {
              swiper.slideTo(Number(id) + 1);
            }}
            modules={[Navigation, Virtual, Pagination, Keyboard, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            grabCursor={true}
            loop={true}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 20000,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            virtual
          >
            {slides.map((el, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <div className={styles.text}>
                  <h1>{el.name}</h1>
                </div>
                <div className={styles.slidecont}>
                  <div className={styles.left}>
                    <div>
                      <span>Проблема:</span> {el.problem}
                    </div>
                    <div>
                      <span>Решение:</span> {el.solution}
                    </div>
                    <div>
                      <span>Результат:</span> {el.result}
                    </div>
                    <div>
                      <span>Цифры:</span> {el.facts}
                    </div>
                    {/* <button
                    onClick={(e) => {
                      navigation(`/projects/${index + 1}`);
                    }}
                  >
                    К проекту
                  </button> */}
                  </div>
                  <div className={styles.right}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={el.img}
                        alt=""
                        width={el.width}
                        height={el.height}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Trigger>
    </div>
  );
};
