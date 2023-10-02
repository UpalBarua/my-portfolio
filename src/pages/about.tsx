import { FC } from 'react';
import Head from 'next/head';
import { AboutMe } from '@/components/AboutMe/AboutMe';

const About: FC = () => {
  return (
    <>
      <Head>
        <title>Upal_Barua | About</title>
      </Head>
      <AboutMe />
    </>
  );
};

export default About;
