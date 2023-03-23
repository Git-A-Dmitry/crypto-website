import Image from 'next/image';
import styles from '@/styles/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.text}>
          <h1>Discover the World of Cryptocurrency</h1>
          <p>Are you curious about the exciting and rapidly-evolving world of cryptocurrency? Look no further! Our website is the perfect resource for anyone interested in learning more about this innovative form of digital currency.</p>
          <a href='crypto' className='--btn --btn-hero'>
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
