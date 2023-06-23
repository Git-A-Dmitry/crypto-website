import React from 'react';
import Image from 'next/image';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { RiWallet2Fill } from 'react-icons/ri';
import Card from './Card';

const Cards = () => {
  return (
    <div className='intro'>
      <div className='intro__wrapper'>
        <div className='intro__cards'>
          <div className='card'>
            <Card
              icon={<SiFsecure className='icon' />}
              heading='Privacy'
              text='Cryptocurrency is not controlled or managed by financial institutions. It eliminates the need for a middleman and relies on a decentralized peer-to-peer structure called the blockchain. Instead of using real names, cryptocurrency relies on crypto wallet addresses that can provide complete anonymity.'
            />
          </div>

          <div className='card'>
            <Card
              icon={<SiHiveBlockchain className='icon' />}
              heading='Blockchain'
              text='The crypto network consists of a number of computers that keep copies of all cryptocurrency transactions. These computers are referred to as miners, as they are paid coins for maintaining the ledger of transaction records. The record containing all crypto transactions is known as the blockchain.'
            />
          </div>

          <div className='card'>
            <Card
              icon={<RiWallet2Fill className='icon' />}
              heading='Crypto Wallet'
              text='To begin using cryptocurrency, you will need to create a crypto wallet. This wallet will be associated with two keys: a private key and a public key. When you want to transfer coins, you will generate a signed message (request) using these keys, which will then be verified and sent to the cryptocurrency network.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
