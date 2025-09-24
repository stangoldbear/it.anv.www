import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./Footer.module.css";
import Logo from "./Logo";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.block}>
            <div className={styles.title}>Associazione Nuova Vita</div>
            <p className={styles.text}>
              <strong>Sede legale, Centro Ascolto,</strong>
              <br />
              <strong>Magazzino e distribuzione alimenti:</strong>
              <br />
              via Giosuè Carducci 8-10,
              <br />
              40063 Monghidoro BO, Bologna
            </p>
            <p className={styles.text}>
              <strong>Coordinate bancarie:</strong>
              <br />
              Associazione Nuova Vita ODV
              <br />
              C.F. 91298160374
              <br />
              <span className={styles.mono}>
                IBAN: IT13E0847236930000000108829
              </span>
              <br />
              BCC FELSINEA, Agenzia di Monghidoro
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.ctaGroup}>
            <Link to="/donate" className={styles.cta}>
              Dona Ora!
            </Link>
            <Link to="/5x1000" className={styles.cta}>
              Dona il 5 per mille!
            </Link>
          </div>
          <div className={styles.block}>
            <div className={styles.subtitle}>Telefono:</div>
            <p className={styles.text}>
              Rossella:{" "}
              <a href="tel:+393358085949" className={styles.link}>
                335 808 59 49
              </a>
              <br />
              Paolo:{" "}
              <a href="tel:+393469914575" className={styles.link}>
                346 99 14 575
              </a>
            </p>
            <p className={styles.text}>
              Mail:{" "}
              <a href="mailto:info@assonuovavita.it" className={styles.link}>
                info@assonuovavita.it
              </a>
              <br />
              Pec:{" "}
              <a href="mailto:assonuovavita@pec.it" className={styles.link}>
                assonuovavita@pec.it
              </a>
              <br />
              <a href="#" className={styles.link} rel="noopener noreferrer">
                Nuova Vita su Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.copy}>Copyright © {year}</div>
        <Logo className={`${styles.logo} ${styles.bottomLogo}`} />
      </div>
    </footer>
  );
};

export default Footer;
