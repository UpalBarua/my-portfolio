import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header/Header';
import { Container } from '@/components/UI/Container/Container';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
