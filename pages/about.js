import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '../styles/About.module.scss';

const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <div className={styles.wrapper}>
          {/* <div className={`${styles.wrapper} container`}> */}
          <div className={styles.text}>
            <h2>What is Cryptocurrency?</h2>
            <p>Cryptocurrency is a digital form of currency that uses encryption techniques to secure and verify transactions and to control the creation of new units.</p>
            <br />
            <p>Instead of being issued by a government or financial institution, cryptocurrencies are created through a process called &quot;mining&quot; which involves solving complex mathematical problems using powerful computers.</p>
            <br />
            <p>Once created, cryptocurrencies are stored in digital wallets and can be used to buy goods and services or traded on cryptocurrency exchanges. Transactions are recorded on a public ledger called a &quot;blockchain&quot; which is maintained by a decentralized network of computers rather than a central authority.</p>
            <br />
            <p>The decentralized nature of cryptocurrencies makes them resistant to censorship and fraud, but their value can be volatile due to market demand and speculative trading.</p>
          </div>

          <div>
            {/* <Image src='/crypto-bg-off.png' alt='mining' width={350} height={480} /> */}
            {/* <Image src='/pexels-coins.jpg' alt='mining' width={1000} height={666} /> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default about;
