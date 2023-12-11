import { useNavigate } from "react-router-dom";
import { ProjectsList } from "../../widgets/ProjectsList/ProjectsList";
import styles from "./Projects.module.css";
import { TriggerHeader } from "../../widgets/triger/triger";

export const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <TriggerHeader className={styles.animcont}>
        <h1>Наши проекты</h1>
      </TriggerHeader>
      <TriggerHeader>
        <ProjectsList />
      </TriggerHeader>
      <TriggerHeader className={styles.cont}>
        <div className={styles.buttoncont}>
          <button
            onClick={() => {
              navigate("/projects/0");
            }}
          >
            <span>Все проекты</span>
          </button>
        </div>
      </TriggerHeader>
    </div>
  );
};
