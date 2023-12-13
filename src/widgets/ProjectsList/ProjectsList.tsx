import { useNavigate } from "react-router-dom";
import styles from "./ProjectsList.module.css";

export const ProjectsList = () => {
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    navigate(`/projects/${e.target.id}`);
  };
  return (
    <div className={styles.container}>
      <div>
        <label>SaluteBot</label>
        <div
          style={{
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <div
            style={{
              backgroundImage: "url('/SaluteBot.jpg')",
              backgroundSize: "cover",
            }}
          />
          <button
            id="7"
            style={{
              color: "rgb(0, 0, 0)",
              borderColor: "rgb(237, 153, 55)",
            }}
            onClick={(e) => handleClick(e)}
          >
            К проекту
          </button>
        </div>
      </div>
      <div>
        <label>FECIT SERVICE</label>
        <div
          style={{
            backgroundColor: "rgb(13, 13, 13)",
          }}
        >
          <div
            style={{
              backgroundImage: "url('/LandingsFecit.jpg')",
              backgroundSize: "cover",
            }}
          />
          <button id="1" onClick={(e) => handleClick(e)}>
            К проекту
          </button>
        </div>
      </div>
      <div>
        <label>BOLDO BLOG</label>
        <div
          style={{
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <div
            style={{
              backgroundImage: "url('/FunnelsBoldo.jpg')",
              backgroundSize: "cover",
            }}
          />
          <button
            id="21"
            style={{ color: "rgb(9, 39, 65)", borderColor: "blueviolet" }}
            onClick={(e) => handleClick(e)}
          >
            К проекту
          </button>
        </div>
      </div>
    </div>
  );
};
