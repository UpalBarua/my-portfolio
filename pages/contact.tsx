import { FC } from 'react';
import Head from 'next/head';
import { ContactMe } from '@/components/ContactMe/ContactMe';

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Upal_Barua | Contact</title>
      </Head>
      <ContactMe />
    </>
  );
};

export default Contact;
