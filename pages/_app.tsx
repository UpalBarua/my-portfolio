import type { AppProps } from 'next/app';
import { Header } from '@/components/Header/Header';
import { Container } from '@/components/UI/Container/Container';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.scss';

const TOASTER_STYLES = {
  backgroundColor: 'hsl(210, 3%, 16%)',
  color: 'hsl(0, 0%, 100%)',
  fontSize: '1.125rem',
  boxShadow:
    'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '3.5rem' }}>
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            style: TOASTER_STYLES,
          }}
        />
      </Container>
    </>
  );
}
