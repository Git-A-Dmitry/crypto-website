import Image from 'next/image';
import styles from '@/styles/Hero.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
// import traiding from '../public/3d-digital.jpg';

const Hero = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);

  return (
    <motion.section className={styles.hero} style={{ y }}>
      <div className='container'>
        <div className={styles.text}>
          <motion.h1 //
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.6, type: 'tween', duration: 0.5 }}
          >
            Crypto World
          </motion.h1>

          <motion.p //
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.9, type: 'tween', duration: 0.5 }}
          >
            Are you curious about the exciting and rapidly-evolving world of cryptocurrency? Our website is the perfect resource for anyone interested in learning more about this innovative form of digital currency.
          </motion.p>
          <a href='crypto' className='btn btn-hero'>
            Get Started
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
