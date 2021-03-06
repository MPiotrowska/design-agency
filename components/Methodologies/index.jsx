import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';

import { Section } from '../Section';
import styles from './methodologies.module.css';
import data from '../../mocks/data.json';

export const Methodologies = ({ alt = '' }) => {
  return (
    <Container fullWidth>
      <Container>
        <FlexBox justifyContent="space-between" alignItems="center">
          <div className={styles.imageContainer}>
            <img src={data.methodology.url} alt={alt} />
          </div>
          <Section padding="80px 0px">
            <p>OUR METHODOLOGIES</p>
            <h2 className={styles.caseTitle}>Sprints and Lean UX</h2>

            <ul>
              {data.shortList.map((listItem) => (
                <a
                  href={listItem.url}
                  className={styles.caseLink}
                  target="blank"
                  key={listItem.url}
                >
                  <li className={styles.listItem}>{listItem.item}</li>
                </a>
              ))}
            </ul>
          </Section>
        </FlexBox>
      </Container>
    </Container>
  );
};
