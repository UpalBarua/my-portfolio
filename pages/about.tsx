import Head from 'next/head';
import { AboutMe } from '@/components/AboutMe/AboutMe';

export default function about() {
  return (
    <>
      <Head>
        <title>Upal Barua | About</title>
      </Head>
      <AboutMe />
    </>
  );
}
