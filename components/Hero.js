import Image from 'next/image';
import styles from '@/styles/Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.text}>
          <motion.h1 //
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ type: 'tween', duration: 5 }}
          >
            Discover the World of
          </motion.h1>

          <motion.h1 //
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'tween', duration: 5 }}
          >
            Cryptocurrency
          </motion.h1>

          <p>Are you curious about the exciting and rapidly-evolving world of cryptocurrency? Look no further! Our website is the perfect resource for anyone interested in learning more about this innovative form of digital currency.</p>
          <a href='crypto' className='btn btn-hero'>
            Get Started
          </a>
        </div>
        {/* <div className='hero-img'>
          <Image src='/crypto.png' alt='phone' width={225} height={450} />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
