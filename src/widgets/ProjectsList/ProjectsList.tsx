import styles from "./ProjectsList.module.css";

export const ProjectsList = () => {
  // const navigate = useNavigate();
  // const handleClick = (e: any) => {
  //   navigate(`/projects/${e.target.id}`);
  // };
  return (
    <div className={styles.container}>
      <div>
        <label>SEMILI AI</label>
        <div
          style={{
            backgroundColor: "rgb(21, 66, 52)",
          }}
        >
          <div
            style={{
              backgroundImage: "url('/NeuralNetsSemili1.jpg')",
              backgroundSize: "cover",
            }}
          />
          {/* <button id="1" onClick={(e) => handleClick(e)}>
            К проекту
          </button> */}
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
          {/* <button id="2" onClick={(e) => handleClick(e)}>
            К проекту
          </button> */}
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
          {/* <button
            id="3"
            style={{ color: "rgb(9, 39, 65)", borderColor: "blueviolet" }}
            onClick={(e) => handleClick(e)}
          >
            К проекту
          </button> */}
        </div>
      </div>
    </div>
  );
};
