import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.css";
import Logo from "./Logo";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo className={styles.logo} />
      </div>
      <Link className={styles.title} to="/">
        Associazione Nuova Vita
      </Link>
      <nav className={styles.nav} aria-label="Main Navigation">
        <Link className={styles.link} activeClassName={styles.active} to="/">Home</Link>
        <Link className={styles.link} activeClassName={styles.active} to="/chi-siamo">Chi Siamo</Link>
        <Link className={styles.link} activeClassName={styles.active} to="/servizi">Servizi</Link>
        <Link className={styles.link} activeClassName={styles.active} to="/documenti">Documenti</Link>
        <Link className={styles.link} activeClassName={styles.active} to="/diventa-socio">Diventa Socio</Link>
      </nav>
      <div className={styles.right}>
        <Link className={styles.cta} to="/donate">Dona ora!</Link>
      </div>
    </header>
  );
};

export default Header;
