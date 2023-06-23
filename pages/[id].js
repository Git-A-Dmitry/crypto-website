import Layout from '@/components/Layout';
import { formatNumbers, checkPrice } from '@/components/CryptoList';
import styles from '@/styles/Id.module.scss';
import Image from 'next/image';
import Intro from '@/components/Intro';

const Coin = ({ coins }) => {
  // console.log(coins);
  const { id, icon, name, symbol, price, priceChange1h, priceChange1d, priceChange1w, marketCap, totalSupply, websiteUrl, rank } = coins.coin;

  return (
    <Layout>
      <Intro />
      <section className={styles.coin}>
        <h2 className={styles.heading}>Coin Details</h2>

        <div className={styles.container}>
          <div>
            <div className={styles['card-header']}>
              <Image
                src={icon}
                alt={name}
                width='50'
                height='50'
              />
              &nbsp; &nbsp;
              <span>
                <p className='--text-light'>{symbol}</p>
                <h2 className='--text-light'>{name}</h2>
              </span>
            </div>
          </div>

          <div className={styles.card}>
            <h3 style={{ color: '#ffab00', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px' }}>{name}</h3>
            <span style={{ display: 'block' }}>Price ${formatNumbers(price.toFixed(2))}</span>
            <span>Rank:</span> {rank}
            <ul className='coin-details'>
              <li>
                <span className={styles['coin-title']}>1H Change: </span>
                <span className={checkPrice(priceChange1h)}>{priceChange1h}</span>
              </li>
              <li>
                <span>24H Change: </span>
                <span className={checkPrice(priceChange1d)}>{priceChange1d}</span>
              </li>
              <li>
                <span>Week Change: </span>
                <span className={checkPrice(priceChange1w)}>{priceChange1w}</span>
              </li>
              <li>
                <span>Market Capitalization: </span>
                <span>${formatNumbers(marketCap.toFixed(2))}</span>
              </li>
              <li>
                <span>Total Supply: </span>
                <span>{formatNumbers(totalSupply.toFixed(2))}</span>
              </li>
              <li>
                <span>Website: </span>
                <span>
                  <a //
                    href={websiteUrl}
                    target='_blank'
                    rel='noreferrer'
                    style={{ color: 'lightblue' }}
                  >
                    {websiteUrl //
                      .replace('http://www.', '')
                      .replace('https://www.', '')
                      .replace('https://', '')
                      .replace('/', '')}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20');
  const data = await res.json();

  const paths = data.coins.map((coin) => {
    return {
      params: {
        id: coin.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch('https://api.coinstats.app/public/v1/coins/' + id);
  const data = await res.json();

  return {
    props: {
      coins: data,
    },
  };
};

export default Coin;
