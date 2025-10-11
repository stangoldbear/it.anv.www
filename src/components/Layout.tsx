import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as styles from "./Layout.module.css";
import '../styles/global.css';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <a href="#main-content" className={styles.skipLink}>
        Salta al contenuto principale
      </a>
      <Header />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
