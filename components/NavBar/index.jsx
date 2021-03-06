/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navBar.module.css';
import { useScrollState, useScrollDispatch } from '../../lib/scrollContext';

export const NavBar = () => {
  const globalState = useScrollState();
  const dispatch = useScrollDispatch();
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
    dispatch({
      type: 'toggleBurger',
    });
  };

  const burgerStyles = globalState.heroIsInView
    ? styles.burger
    : styles.burgerBlack;

  return (
    <header
      className={styles.navBarContainer}
      style={router.pathname === '/' ? headerStyles : noHomeStyles}
    >
      <Link href="/">
        <a className={styles.logo}>V-Studio</a>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.menuContainer}>
          <li>
            <Link href="/about">
              <a className={styles.menuItem}>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/studies">
              <a className={styles.menuItem}>Case Studies</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.menuItem}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleClick}
        className={styles.burgerButton}
        type="button"
      >
        <span className={globalState.open ? styles.burgerOpen : burgerStyles} />
      </button>

      <div className={globalState.active ? styles.menuBurger : styles.menu}>
        <ul className={styles.menuBurgerInner}>
          <li onClick={handleClick}>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/studies">
              <a>Case Studies</a>
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
