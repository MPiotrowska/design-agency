import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.caseTitle}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cookie Policy
      </a>
      <a
        className={styles.caseTitle}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/icon-instagram.svg"
          alt="Vercel Logo"
          // className={styles.logo}
        />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/icon-linkedin.svg"
          alt="Vercel Logo"
          // className={styles.logo}
        />
      </a>
      <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="images/icon-dribbble.svg"
          alt="Vercel Logo"
          // className={styles.logo}
        />
      </a>
    </footer>
  );
};
