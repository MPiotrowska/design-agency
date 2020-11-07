import Head from 'next/head';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <Container>hello</Container>
        <Card caseLink="https://google.com" caseTitle="Samsung">
          We are samsuibg
        </Card>
      </main>
      <Footer />
    </div>
  );
}
