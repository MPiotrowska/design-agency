import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { MiniList } from '../MiniList';
import { Section } from '../Section';
import styles from './methodologies.module.css';

const testImage =
  'https://via.placeholder.com/600x450/bebfde/000000%20?Text=Digital.com%20C/O%20https://placeholder.com/';

export const Methodologies = ({ src = testImage, alt = '' }) => {
  return (
    <Container fullWidth>
      <Container>
        <FlexBox justifyContent="space-between">
          <img src={src} alt={alt} />

          <Section>
            <p>OUR METHODOLOGIES</p>
            <h2 className={styles.caseTitle}>Sprints and Lean UX</h2>
            <MiniList>
              {' '}
              <ul>
                <a
                  href="https://google.com"
                  className={styles.caseLink}
                  target="blank"
                >
                  <li>
                    ● Validate any idea in just 1-week with Design Sprint →
                  </li>
                </a>
                <a
                  href="https://google.com"
                  target="blank"
                  className={styles.caseLink}
                >
                  <li>
                    ● Design great products with agile teams with Lean UX →
                  </li>
                </a>
              </ul>
            </MiniList>
          </Section>
        </FlexBox>
      </Container>
    </Container>
  );
};
