import CryptoList from '@/components/CryptoList';
import Layout from '@/components/Layout';
import styles from '../styles/Crypto.module.scss';

const crypto = ({ coins }) => {
  return (
    <Layout>
      <section className={styles.crypto}>
        <div className='container crypto'>
          <h2>Click on table data to know more</h2>
          <CryptoList coins={coins.coins} />
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=10');
  const data = await res.json();

  return {
    props: {
      coins: data,
    },
  };
};

export default crypto;
