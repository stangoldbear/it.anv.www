import * as React from 'react';
import * as styles from './Card.module.css';

export interface CardProps {
  /**
   * Card title
   */
  title?: string;

  /**
   * Card content (text or React elements)
   */
  children: React.ReactNode;

  /**
   * Optional image URL
   */
  image?: string;

  /**
   * Alt text for image (required if image is provided)
   */
  imageAlt?: string;

  /**
   * Optional link destination
   */
  href?: string;
}

/**
 * Card Component
 *
 * Flexible card component for displaying content in a contained box.
 * Can include title, image, and body content.
 *
 * @example
 * <Card title="Compassione" image="./values-compassion.jpg" imageAlt="Icon representing compassion">
 *   <p>Mettiamo le persone al centro di tutto ciò che facciamo.</p>
 * </Card>
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  image,
  imageAlt,
  href,
}) => {
  const cardContent = (
    <>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={imageAlt || ''} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.body}>{children}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${styles.card} ${styles.clickable}`}>
        {cardContent}
      </a>
    );
  }

  return <div className={styles.card}>{cardContent}</div>;
};

export default Card;
