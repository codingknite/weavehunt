import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';
import type { NextPage } from 'next';
import { Space_Grotesk } from '@next/font/google';
import { AiOutlineSend } from 'react-icons/ai';
import { RiQuillPenLine } from 'react-icons/ri';
import { MainWrapper } from '../components/common';
import * as Styled from '../styles/home';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WeaveHunt</title>
        <meta
          name='description'
          content='Product Discovery In The Arweave Eco-System'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainWrapper>
        <Styled.IntroSectionWrapper>
          <Nav />
          <Styled.IntroSection>
            <button>coming soon 🚧</button>
            <h1>Find Booming Projects In Arweave</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Faucibus id molestie velit
              duis vestibulum ac.
            </p>
            <div>
              <div className='mail-icon'>
                <RiQuillPenLine color='' size={25} />
              </div>
              <input
                type='text'
                placeholder='Enter Email to Join Waitlist'
                className={spaceGrotesk.className}
              />
            </div>
            <Image
              src='/mainpreview.svg'
              alt='main preview'
              width={900}
              height={100}
              className='main-preview'
            />

            <Image
              src='/scroll.svg'
              alt='main preview'
              width={30}
              height={30}
              className='scroll-logo'
            />
          </Styled.IntroSection>
        </Styled.IntroSectionWrapper>

        <Styled.ArweaveSection>
          <h2>
            Built for <span>Arweave</span> with Arweave
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Faucibus id molestie velit
            duis vestibulum ac.
          </p>

          {/**
           * Play sliding animation of logos of projects in the ecosystem
           *
           * arweave logo
           * exm logo
           * kwil
           *
           */}
        </Styled.ArweaveSection>
      </MainWrapper>
    </div>
  );
};

export default Home;
