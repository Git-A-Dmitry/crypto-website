import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Table.module.scss';
import Search from './Search';
import ReactPaginate from 'react-paginate';

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

const CryptoList = ({ coins, initialDate }) => {
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

  // Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredCoins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredCoins.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredCoins]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCoins.length;
    setItemOffset(newOffset);
  };

  return (
    <section>
      <div className={styles.heading}>
        <h1>Crypto Prices</h1>
      </div>
      <div className='container'>
        <div className={styles.table}>
          <div className={styles.paragraph}>
            <p>Get the Latest Prices for Bitcoin, Ethereum, and More on {initialDate} </p>
            <Search value={search} onChange={handleSearch} />
          </div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Crypto Coin</th>
                <th>Current Price</th>
                <th>24H Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((coin, index) => {
                const { id, icon, name, symbol, price, priceChange1d, marketCap } = coin;
                return (
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
                );
              })}
            </tbody>
          </table>
        </div>
        <ReactPaginate //
          breakLabel='...'
          nextLabel='Next'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='Prev'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </div>
    </section>
  );
};

export default CryptoList;
