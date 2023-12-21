import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { HeaderNav } from "./NavBar";
import { animateScroll as scroll } from "react-scroll";
import { TriggerHeader } from "../triger/triger";
import { useMediaQuery } from "@mui/material";

export const Header = ({ show, setShow }: any) => {
  const navigate = useNavigate();
  const newhead = useMediaQuery("(max-width: 480px)");
  const handleClick = (e: any) => {
    e.preventDefault(e.target.innerHTML);
    console.log();
    switch (e.target.innerHTML) {
      case "Услуги": {
        navigate("/");
        scroll.scrollTo(800);
        break;
      }
      case "О нас": {
        navigate("/");
        scroll.scrollTo(1300);
        break;
      }
      case "Наши проекты": {
        navigate("/");
        scroll.scrollTo(1700);
        break;
      }
      case "Отзывы": {
        navigate("/");
        scroll.scrollTo(2500);
        break;
      }
      case "Вакансии": {
        navigate("/");
        scroll.scrollTo(3400);
        break;
      }
      default: {
        navigate("/");
        break;
      }
    }
  };
  return (
    <TriggerHeader>
      {!newhead ? (
        <div className={styles.header}>
          <img
            className={styles.logo}
            src="/logo.svg"
            alt=""
            width={251}
            height={59}
          />
          <ul className={styles.navbar}>
            {HeaderNav.map((el) => (
              <li key={el}>
                <button onClick={(e) => handleClick(e)}>{el}</button>
              </li>
            ))}
          </ul>
          <h3 className={styles.number}>+7 499 325 45 25</h3>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <div
            className={styles.newhead}
            style={show ? { display: "none" } : {}}
          >
            <img
              className={styles.newheadlogo}
              src="/logo.svg"
              alt=""
              width={150}
              height={35}
            />
            <h3 className={styles.number}>+7 499 325 45 25</h3>
            <button onClick={() => setShow(true)}>
              <img src="/newhead.svg" alt="" width={40} height={40} />
            </button>
          </div>
          <div className={styles.menu} style={show ? {} : { display: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img
                className={styles.newlogo}
                src="/newheadlogo.svg"
                alt=""
                width={251}
                height={59}
              />
              <button
                onClick={() => setShow(false)}
                style={{ background: "transparent", border: "none" }}
              >
                <img src="/closehead.svg" alt="" width={25} height={25} />
              </button>
            </div>
            <ul className={styles.navbar}>
              {HeaderNav.map((el) => (
                <li key={el}>
                  <button onClick={(e) => handleClick(e)}>{el}</button>
                  <hr style={{ borderBottom: "2px solid white" }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </TriggerHeader>
  );
};
