import { useNavigate } from "react-router-dom";
import styles from "./ProjectsList.module.css";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProjectColl } from "./Projects";

export const ProjectsList = () => {
  const navigate = useNavigate();
  const swip = useMediaQuery("(max-width: 480px)");
  const nav = useMediaQuery("(max-width: 400px)");
  const handleClick = (e: any) => {
    navigate(`/projects/${e.target.id}`);
  };
  return (
    <>
      {!swip ? (
        <div className={styles.container}>
          {ProjectColl.map((proj, idx) => (
            <ProjCard key={idx} proj={proj} handleClick={handleClick} />
          ))}
        </div>
      ) : (
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
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={1}
          className={styles.swiper}
        >
          {ProjectColl.map((proj, idx) => (
            <SwiperSlide key={idx}>
              <ProjCard proj={proj} handleClick={handleClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

const ProjCard = ({ proj, handleClick }: any) => {
  return (
    <div className={styles.proj}>
      <label>{proj.name}</label>
      <div
        style={{
          backgroundColor: `${proj.color}`,
        }}
      >
        <div
          style={{
            backgroundImage: `${proj.img}`,
            backgroundSize: "cover",
          }}
        />
        <button id={proj.id} style={proj.style} onClick={(e) => handleClick(e)}>
          К проекту
        </button>
      </div>
    </div>
  );
};
