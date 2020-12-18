import React from 'react';
import Link from 'next/link';
import styles from './navBar.module.css';
import { useScrollState } from '../../lib/scrollContext';
import { useRouter } from 'next/router';

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const globalState = useScrollState();
  const router = useRouter();

  const headerStyles = {
    backgroundColor: globalState.heroIsInView ? 'transparent' : 'white',
    boxShadow: globalState.heroIsInView
      ? null
      : 'rgba(0, 0, 0, 0.25) 0px 2px 2px, rgba(0, 0, 0, 0.22) 0px 0px 0px',
  };

  const noHomeStyles = {
    backgroundColor: 'white',
  };

  const handleClick = () => {
    setOpen(!open);
    setActive(!active);
  };

  return (
    <header
      className={styles.navBarContainer}
      style={router.pathname === '/' ? headerStyles : noHomeStyles}
    >
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
            <Link href="/studies">
              <a>Case Studies</a>
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
            <Link href="/studies">
              <a>Case Studies</a>
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
