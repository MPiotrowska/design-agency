import React from 'react';
import styles from './adress.module.css';
import data from '../../mocks/data.json';
import { Section } from '../Section';
import { FlexBox } from '../FlexBox';

export const Adress = () => {
  return (
    <FlexBox justifyContent="space-around">
      <Section>
        {' '}
        <div className={styles.adressContainer}>
          <h3 className={styles.cityName}>{data.city.name}</h3>
          {data.adress.map((item) => (
            <p className={styles.adressLine}>{item.line}</p>
          ))}
        </div>
      </Section>
      <Section>
        {' '}
        <div className={styles.adressContainer}>
          <h3 className={styles.cityName}>{data.cityBuenos.name}</h3>
          {data.adressBuenos.map((item) => (
            <p className={styles.adressLine}>{item.line}</p>
          ))}
        </div>
      </Section>
    </FlexBox>
  );
};
