import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header>
        {/* <div className='container header'> */}
        <div className='header'>
          <div className='logo'>
            <h3>crypto</h3>
            {/* <h2>
              Crypto <span className='--color-danger'>X</span>
            </h2> */}
          </div>

          <nav>
            <ul>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/about'}>About</Link>
              </li>
              <li className='--btn --btn-primary'>
                <Link href={'/'}>Get Started</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
