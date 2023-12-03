import { useNavigate } from "react-router-dom";
import { ProjectsList } from "../../widgets/ProjectsList/ProjectsList";
import styles from "./Projects.module.css";

export const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>Наши проекты</h1>
      <ProjectsList />
      <div className="buttoncontainer">
        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          <span>Все проекты</span>
        </button>
      </div>
    </div>
  );
};
