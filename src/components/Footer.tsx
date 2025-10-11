import * as React from 'react';
import * as styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Associazione Nuova Vita. Tutti i diritti riservati.</p>
        <p>Codice Fiscale: 91298160374</p>
      </div>
    </footer>
  );
};

export default Footer;
