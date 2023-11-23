import styles from "./Header.module.css";
import { HeaderNav } from "./NavBar";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="/logo.svg"
        alt=""
        width={162}
        height={61}
      />
      <ul className={styles.navbar}>
        {HeaderNav.map((el) => (
          <li key={el}>
            <a href="#">{el}</a>
          </li>
        ))}
      </ul>
      <img
        className={styles.number}
        src="/headernumber.svg"
        alt=""
        width={160}
        height={22}
      />
    </div>
  );
};
