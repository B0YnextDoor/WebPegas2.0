import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { HeaderNav } from "./NavBar";
import { animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const navigate = useNavigate();
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
      // case "Связаться с нами": {
      //   navigate("/");
      //   scroll.scrollTo(1970);
      //   break;
      // }
      // case "Контакты": {
      //   navigate("/");
      //   scroll.scrollTo(2300);
      //   break;
      // }
      default: {
        navigate("/");
        break;
      }
    }
  };
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="/logo.jpg"
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
  );
};
