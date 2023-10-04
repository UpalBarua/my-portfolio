import { Header } from '@/components/Header/Header';
import { Container } from '@/components/UI/Container/Container';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const outfit = localFont({
  src: '../../public/fonts/Outfit.ttf',
});

const TOASTER_STYLES = {
  backgroundColor: 'hsl(210, 3%, 16%)',
  color: 'hsl(0, 0%, 100%)',
  fontSize: '1.125rem',
  boxShadow:
    'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={outfit.className}>
      <Header />
      <Container style={{ paddingTop: '3.5rem' }}>
        <PhotoProvider>
          <Component {...pageProps} />
          <Toaster
            toastOptions={{
              style: TOASTER_STYLES,
            }}
          />
        </PhotoProvider>
      </Container>
    </main>
  );
}
