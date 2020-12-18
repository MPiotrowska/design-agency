import '../styles/globals.css';
import App, { Container } from 'next/app';
import { Page } from '../components/Page';
import { ScrollProvider } from '../lib/scrollContext';

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <ScrollProvider>
        <Container>
          <Page>
            <Component />
          </Page>
        </Container>
      </ScrollProvider>
    );
  }
}

export default MyApp;

// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
