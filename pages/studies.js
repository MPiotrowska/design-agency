import React from 'react';
import { Card } from '../components/Card';
import { ContactUs } from '../components/ContactUs';
import { Container } from '../components/Container';
import { FlexBox } from '../components/FlexBox';

import styles from '../styles/Home.module.css';

const caseStudies = () => {
  return (
    <main className={styles.main}>
      <Container fullWidth>
        <Container>
          {' '}
          <FlexBox justifyContent="space-around">
            <Card
              style={{ flex: 1, marginRight: '20px' }}
              caseLink="https://google.com"
              caseTitle="Samsung"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              asperiores expedita debitis nihil odio? Sunt quae impedit
              assumenda nisi, id quos porro optio animi natus fugiat maiores
              culpa alias quaerat!
            </Card>
            <Card
              style={{ flex: 1, marginRight: '20px' }}
              caseLink="https://google.com"
              caseTitle="Samsung"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut
              quibusdam error repellendus omnis dolor quas quisquam in quasi.
              Itaque vero amet eaque? Rem officia aliquam iusto unde quisquam
              necessitatibus.
            </Card>
            <Card
              style={{ flex: 1, marginRight: '20px' }}
              caseLink="https://google.com"
              caseTitle="Samsung"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut
              quibusdam error repellendus omnis dolor quas quisquam in quasi.
              Itaque vero amet eaque? Rem officia aliquam iusto unde quisquam
              necessitatibus.
            </Card>
            <Card
              style={{ flex: 1, marginRight: '20px' }}
              caseLink="https://google.com"
              caseTitle="Samsung"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut
              quibusdam error repellendus omnis dolor quas quisquam in quasi.
              Itaque vero amet eaque? Rem officia aliquam iusto unde quisquam
              necessitatibus.
            </Card>
          </FlexBox>
        </Container>
      </Container>
      <Container fullWidth style={{ backgroundColor: '#102990' }}>
        <ContactUs caseLink="/contact" caseTitle="Let’s talk. Contact Us." />
      </Container>
    </main>
  );
};

export default caseStudies;
