import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/CryptoList.module.scss';
import Search from './Search';

export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const checkPrice = (price) => {
  const priceChange = Math.sign(price);
  if (priceChange === -1) {
    return 'red';
  }
  return 'green';
};

const CryptoList = ({ coins }) => {
  const [search, setSearch] = useState('');
  const [filteredCoins, setFilteredCoins] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredCoins(coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, coins]);

  // Route to [id]
  const router = useRouter();

  const handleRowClick = (id) => {
    router.push(`/${id}`);
  };

  return (
    // <section className='coin-list'>
    <section className={styles.cryptolist}>
      <div className='container'>
        <div className={styles.table}>
          <Search value={search} onChange={handleSearch} />
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Crypto Coin</th>
                <th>Current Price</th>
                <th>24H Change</th>
                <th>Market Capitalization</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin, index) => {
                const { id, icon, name, symbol, price, priceChange1d, marketCap } = coin;
                return (
                  // <Link href={'/' + id} key={id} passHref>
                  <tr key={id} onClick={() => handleRowClick(id)}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={icon} alt={name} width='20' height='20' />
                      &nbsp;
                      {symbol}
                    </td>
                    <td>${formatNumbers(price.toFixed(2))}</td>
                    <td className={checkPrice(priceChange1d)}>{priceChange1d}</td>
                    <td>${formatNumbers(marketCap.toFixed(2))}</td>
                  </tr>
                  // </Link>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CryptoList;
