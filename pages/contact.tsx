import Head from 'next/head';
import { ContactMe } from '@/components/ContactMe/ContactMe';

export default function contact() {
  return (
    <>
      <Head>
        <title>Upal Barua | Contact</title>
      </Head>

      <ContactMe />
    </>
  );
}
