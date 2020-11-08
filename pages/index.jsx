import React from 'react';
import Head from 'next/head';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { FlexBox } from '../components/FlexBox';
// styles
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <Container>
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
      </main>
      <Footer />
    </>
  );
}
