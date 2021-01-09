import React from 'react';
import { FlexBox } from '../FlexBox';
import { Section } from '../Section';
import styles from './miniList.module.css';
import data from '../../mocks/data.json';

export const MiniList = () => {
  return (
    <FlexBox justifyContent="space-between">
      <Section>
        <div className={styles.listContainer}>
          <a
            target="blank"
            className={styles.caseLink}
            href={data.digitalTitle.link}
          >
            <h1 className={styles.white}>{data.digitalTitle.content}</h1>
          </a>
          <ul className={styles.white}>
            {data.miniList.map((listItem, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${listItem.item}-${i}`} className={styles.listItem}>
                {listItem.item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section>
        <div className={styles.listContainer}>
          <a
            target="blank"
            className={styles.caseLink}
            href={data.brandingTitle.link}
          >
            <h1 className={styles.white}>{data.brandingTitle.content}</h1>
          </a>
          <ul className={styles.white}>
            {data.miniListBranding.map((listItem, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${listItem.item}-${i}`} className={styles.listItem}>
                {listItem.item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section>
        <div className={styles.listContainer}>
          <a
            target="blank"
            className={styles.caseLink}
            href={data.communicationTitle.link}
          >
            <h1 className={styles.white}>{data.communicationTitle.content}</h1>
          </a>
          <ul className={styles.white}>
            {data.miniListCommunication.map((listItem, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${listItem.item}-${i}`} className={styles.listItem}>
                {listItem.item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </FlexBox>
  );
};
