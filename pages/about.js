import Layout from '@/components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.scss';

const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        {/* <div className={styles.contacts}>
          <form action='https://getform.io/f/d78cb41f-c4ad-4655-982c-7946fac55285' method='POST' encType='multipart/form-data'>
            <div className={styles['form-name']}>
              <div className={styles.name}>
                <label htmlFor=''>Name</label>
                <input type='text' name='name' />
              </div>
              <div className={styles.name}>
                <label htmlFor=''>Phone Number</label>
                <input type='text' name='phone' />
              </div>
            </div>

            <div className={styles.name}>
              <label htmlFor=''>Email</label>
              <input type='email' name='email' />
            </div>
            <div className={styles.name}>
              <label htmlFor=''>Subject</label>
              <input type='text' name='subject' />
            </div>

            <div className={styles.name}>
              <label htmlFor=''>Message</label>
              <textarea name='message' id='' cols='30' rows='10'></textarea>
            </div>
            <button className='btn'>Send Message</button>
          </form>
        </div> */}

        <div className={styles.wrapper}>
          <div className={styles.text}>
            <motion.h2 //
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.4, type: 'tween' }}
            >
              What is Cryptocurrency?
            </motion.h2>
            <motion.div //
              animate={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.97, opacity: 0 }}
              transition={{ delay: 0.6, type: 'tween', duration: 0.5 }}
            >
              <p>Cryptocurrency is a digital form of currency that uses encryption techniques to secure and verify transactions and to control the creation of new units.</p>
              <br />
              <p>Instead of being issued by a government or financial institution, cryptocurrencies are created through a process called &quot;mining&quot; which involves solving complex mathematical problems using powerful computers.</p>
              <br />
              <p>Once created, cryptocurrencies are stored in digital wallets and can be used to buy goods and services or traded on cryptocurrency exchanges. Transactions are recorded on a public ledger called a &quot;blockchain&quot; which is maintained by a decentralized network of computers rather than a central authority.</p>
              <br />
              <p>The decentralized nature of cryptocurrencies makes them resistant to censorship and fraud, but their value can be volatile due to market demand and speculative trading.</p>
            </motion.div>
          </div>

          <div className='about-image'>
            {/* <Image src='/crypto-bg-off.png' alt='mining' width={350} height={480} /> */}
            {/* <Image //
              src='/pexels-coins.jpg'
              alt='coins'
              width={640}
              height={960}
              style={{ width: '70vh', height: '100vh', display: 'block', objectFit: 'cover', objectPosition: 'center' }}
 
            /> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default about;
