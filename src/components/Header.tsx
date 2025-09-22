import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.css";
import Logo from "./Logo";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Lock body scroll when the mobile menu is open
  React.useEffect(() => {
    const original = document.body.style.overflow;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original || "";
    }
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [menuOpen]);
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo className={styles.logo} />
      </div>
      <Link className={styles.title} to="/">
        Associazione Nuova Vita
      </Link>
      <nav className={styles.nav} aria-label="Main Navigation">
        <Link className={styles.link} activeClassName={styles.active} to="/">
          Home
        </Link>
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/chi-siamo"
        >
          Chi Siamo
        </Link>
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/servizi"
        >
          Servizi
        </Link>
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/documenti"
        >
          Documenti
        </Link>
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/diventa-socio"
        >
          Diventa Socio
        </Link>
      </nav>
      <div className={styles.right}>
        <Link className={styles.cta} to="/donate">
          Dona ora!
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-label="Apri menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false);
        }}
      >
        <div
          className={styles.overlayPanel}
          role="dialog"
          aria-modal="true"
          id="mobile-menu"
        >
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Chiudi menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <nav className={styles.overlayNav} aria-label="Menu Mobile">
            <Link
              className={styles.link}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={styles.link}
              to="/chi-siamo"
              onClick={() => setMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              className={styles.link}
              to="/servizi"
              onClick={() => setMenuOpen(false)}
            >
              Servizi
            </Link>
            <Link
              className={styles.link}
              to="/documenti"
              onClick={() => setMenuOpen(false)}
            >
              Documenti
            </Link>
            <Link
              className={styles.link}
              to="/diventa-socio"
              onClick={() => setMenuOpen(false)}
            >
              Diventa Socio
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
