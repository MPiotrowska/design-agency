import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { MiniList } from '../MiniList';
import { Section } from '../Section';
import styles from './methodologies.module.css';
import data from '../../mocks/data.json';

const testImage =
  'https://via.placeholder.com/600x450/bebfde/000000%20?Text=Digital.com%20C/O%20https://placeholder.com/';

export const Methodologies = ({ src = testImage, alt = '' }) => {
  return (
    <Container fullWidth>
      <Container>
        <FlexBox justifyContent="space-between">
          <img src={src} alt={alt} />
          <Section padding="80px 0px">
            <p>OUR METHODOLOGIES</p>
            <h2 className={styles.caseTitle}>Sprints and Lean UX</h2>

            <ul>
              {data.shortList.map((listItem) => (
                <a
                  href={listItem.url}
                  className={styles.caseLink}
                  target="blank"
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
