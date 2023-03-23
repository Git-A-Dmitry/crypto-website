import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ coins }) {
  // console.log(coins);

  return (
    <>
      <Head>
        <title>Crypto App</title>
        <meta name='description' content='Crypto Prices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main-container'>
        <Layout>
          <Hero />
        </Layout>
      </main>
    </>
  );
}
