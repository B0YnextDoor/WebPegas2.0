import { useParams } from "react-router-dom";
import { ErrorPage } from "../../../widgets/ErrorPage/ErrorPage";
import styles from "./ProjectPage.module.css";
import { Header } from "../../../widgets/Header/Header";

// import "swiper/css/effect-cards";

export const ProjectPage = () => {
  const { id } = useParams();
  if (!id) {
    return <ErrorPage props={"Server Error. Can't load project."} />;
  }
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};
