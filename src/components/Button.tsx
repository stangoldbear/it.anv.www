import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './Button.module.css';

export interface ButtonProps {
  /**
   * Button/link text
   */
  children: React.ReactNode;

  /**
   * Destination URL (internal or external)
   */
  href?: string;

  /**
   * Visual variant
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'outline';

  /**
   * Opens link in new tab if true
   * @default false
   */
  external?: boolean;

  /**
   * Click handler for button (not used with href)
   */
  onClick?: () => void;

  /**
   * Button type (only used when href is not provided)
   * @default "button"
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
}

/**
 * Button Component
 *
 * Multi-purpose button/link component that can be used as:
 * - Internal link (Gatsby Link)
 * - External link (anchor tag)
 * - Button element (for actions)
 *
 * Supports multiple visual variants and accessibility features.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  external = false,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const className = `${styles.button} ${styles[variant]}`;

  // Internal link (Gatsby Link)
  if (href && !external && href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  // External link
  if (href && (external || !href.startsWith('/'))) {
    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {external && (
          <span className={styles.externalIcon} aria-label="(si apre in una nuova scheda)">
            {' '}↗
          </span>
        )}
      </a>
    );
  }

  // Button element
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
