import CryptoList from '@/components/CryptoList';
import Intro from '@/components/Intro';
import Layout from '@/components/Layout';
import styles from '../styles/Crypto.module.scss';

const crypto = ({ coins }) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const initialDate = day + '.' + month + '.' + year;

  return (
    <Layout>
      <Intro />
      <section className={styles.crypto}>
        <div className={styles.container}>
          <CryptoList //
            coins={coins.coins}
            initialDate={initialDate}
          />
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20');
  const data = await res.json();

  return {
    props: {
      coins: data,
    },
  };
};

export default crypto;
