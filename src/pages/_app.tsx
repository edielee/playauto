import { AppProps } from 'next/app';
import Div from '../atoms/DivComponent/Div';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import GlobalStyle from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Div minHeight='100vh' position='relative'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Div>
    </>
  );
}

export default App;
