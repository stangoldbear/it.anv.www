import * as React from 'react';
import * as styles from './Hero.module.css';

export interface HeroProps {
  /**
   * Main hero title
   */
  title: string;

  /**
   * Hero description/subtitle
   */
  description?: string;

  /**
   * Children elements (typically CTA buttons)
   */
  children?: React.ReactNode;

  /**
   * Background image URL (optional)
   */
  backgroundImage?: string;
}

/**
 * Hero Component
 *
 * Large, prominent section typically at the top of a page.
 * Used to showcase the main message with optional CTA buttons.
 *
 * @example
 * <Hero
 *   title="Aiutiamo la Comunità"
 *   description="Associazione Nuova Vita supporta le persone in difficoltà"
 * >
 *   <Button href="/donate" variant="primary">Dona Ora</Button>
 *   <Button href="/chi-siamo" variant="secondary">Scopri di Più</Button>
 * </Hero>
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  children,
  backgroundImage,
}) => {
  const style = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <section className={styles.hero} style={style}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
