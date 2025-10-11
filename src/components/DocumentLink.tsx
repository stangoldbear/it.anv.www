import * as React from 'react';
import * as styles from './DocumentLink.module.css';

export interface DocumentLinkProps {
  /**
   * Document title
   */
  title: string;

  /**
   * Brief description of the document
   */
  description?: string;

  /**
   * URL/path to the document
   */
  href: string;

  /**
   * File size (e.g., "1.2 MB", "850 KB")
   */
  fileSize?: string;

  /**
   * Publication date
   */
  date?: string;
}

/**
 * DocumentLink Component
 *
 * Displays a formatted link to a downloadable document with metadata.
 * Used primarily on the Documenti page.
 *
 * @example
 * <DocumentLink
 *   title="Statuto 2025"
 *   description="Statuto dell'associazione aggiornato"
 *   href="/documents/statuto-2025.pdf"
 *   fileSize="1.2 MB"
 *   date="2025-01-15"
 * />
 */
export const DocumentLink: React.FC<DocumentLinkProps> = ({
  title,
  description,
  href,
  fileSize,
  date,
}) => {
  // Extract file extension from href
  const extension = href.split('.').pop()?.toUpperCase() || 'FILE';

  return (
    <a href={href} className={styles.documentLink} download>
      <div className={styles.icon}>
        <span className={styles.extension}>{extension}</span>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.metadata}>
          {fileSize && <span className={styles.fileSize}>{fileSize}</span>}
          {date && fileSize && <span className={styles.separator}>•</span>}
          {date && (
            <span className={styles.date}>
              {new Date(date).toLocaleDateString('it-IT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </div>
      </div>
      <div className={styles.downloadIcon}>
        <span>↓</span>
      </div>
    </a>
  );
};

export default DocumentLink;
