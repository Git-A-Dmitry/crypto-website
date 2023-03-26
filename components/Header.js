import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import styles from '@/styles/Header.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Crypto', path: '/crypto' },
  { id: 3, title: 'About', path: '/about' },
];

const Header = () => {
  const { pathname } = useRouter();
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  return (
    <div>
      <header className='header'>
        <nav className='navbar'>
          {/* <div className='logo'> */}
          {/* <h3>crypto</h3> */}
          {/* <h2>
              Crypto <span className='--color-danger'>X</span>
            </h2> */}
          {/* </div> */}

          <div className='navbar__hamburger' onClick={handleClick}>
            {menu ? (
              <FaTimes size={24} style={{ color: 'ffffff' }} /> //
            ) : (
              <FaBars size={24} style={{ color: 'ffffff' }} />
            )}
          </div>

          <div className={menu ? 'navbar__nav-menu active' : 'navbar__nav-menu'}>
            {navigation.map(({ id, title, path }) => (
              <Link //
                key={id}
                href={path}
                className={pathname === path ? 'active' : null}
              >
                {title}
              </Link>
            ))}
          </div>

          {/* <li className='--btn --btn-primary'>
                <Link href={'/'}>Get Started</Link>
              </li> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
