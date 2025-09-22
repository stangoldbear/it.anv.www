import * as React from "react";
import * as styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        © {year} it.assonuovavita. Tutti i diritti riservati.
      </div>
    </footer>
  );
};

export default Footer;
