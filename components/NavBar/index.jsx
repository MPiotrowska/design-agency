import React from 'react';
import Link from 'next/link';
import styles from './navBar.module.css';

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    setActive(!active);
  };

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
      <button
        onClick={handleClick}
        className={styles.burgerButton}
        type="button"
      >
        <span className={open ? styles.burgerOpen : styles.burger} />
      </button>

      <div className={active ? styles.menuBurger : styles.menu}>
        <ul className={styles.menuBurgerInner}>
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
      </div>
    </header>
  );
};
