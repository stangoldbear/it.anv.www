import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link className={styles.link} to="/">
          it.assonuovavita
        </Link>
      </div>
      <nav className={styles.nav} aria-label="Main Navigation">
        <Link className={styles.link} to="/">
          Home
        </Link>
        {/* Add more links as you create pages */}
      </nav>
    </header>
  );
};

export default Header;
