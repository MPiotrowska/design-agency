import React from 'react';
import Link from 'next/link';
import styles from './navBar.module.css';

export const NavBar = () => {
  return (
    <header className={styles.navBarContainer}>
      <Link href="/">
        <a className={styles.logo}>Logo</a>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.menuContainer}>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Our Team</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button type="button" className={styles.burger}>
        burger
      </button>
    </header>
  );
};
