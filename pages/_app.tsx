import { AppProps } from 'next/app';
import Div from '../atoms/DivComponent/Div';
import Footer from '../modules/Footer';
import GlobalStyle from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Div minHeight='100vh' position='relative'>
        <Component {...pageProps} />
        <Footer />
      </Div>
    </>
  );
}

export default App;
