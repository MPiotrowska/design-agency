import React from 'react';
import styles from './list.module.css';
import data from '../../mocks/data.json';
import { Section } from '../Section';

export const List = ({ white, className = '' }) => {
  return (
    <Section>
      {data.list.map((item) => (
        <div key={item.title} className={styles.listContainer}>
          <h1
            className={` title ${className}  ${
              white ? styles.white : styles.black
            }`}
          >
            {item.title}
          </h1>
          <p
            className={`paragraphContainer ${
              white ? styles.white : styles.black
            }`}
          >
            {item.content}
          </p>
        </div>
      ))}
    </Section>
  );
};
