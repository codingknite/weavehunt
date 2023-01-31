import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';
import type { NextPage } from 'next';
import { Space_Grotesk } from '@next/font/google';
import { AiOutlineSend } from 'react-icons/ai';
import { RiQuillPenLine } from 'react-icons/ri';
import { MainWrapper } from '../components/common';
import AllProjects from '../components/cards/allprojects';
import Steps from '../components/cards/steps';
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
            Built for <Styled.SpecialText>Arweave</Styled.SpecialText> with
            Arweave
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

        <Styled.AllProjects>
          <h2>
            All <Styled.SpecialText>Projects</Styled.SpecialText> in One Place
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            laudantium possimus
          </p>

          <Image
            src='/preview2.svg'
            alt='main preview'
            width={30}
            height={30}
            className='scroll-logo'
          />

          <div>
            <AllProjects
              heading='Find relevant products'
              text='Learn the basics of web3 with the articles and tutorials on the blog.'
              imageSrc='/categories.svg'
            />

            <AllProjects
              heading='Stay in the know before launch'
              text='Learn the basics of web3 with the articles and tutorials on the blog.'
              imageSrc='/coming-soon.svg'
            />
          </div>
        </Styled.AllProjects>

        <Styled.AddProject>
          <h2>
            Add a <Styled.SpecialText>project</Styled.SpecialText> in{' '}
            <span className='break-text'>3 steps</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            laudantium possimus
          </p>

          <Styled.ProjectSteps>
            <Image
              src='/setup.svg'
              alt='main preview'
              width={30}
              height={30}
              className='scroll-logo'
            />

            <Steps />
            <div>
              <p className='step-number'>01</p>
              <div>
                <p>Download the app</p>
                <p>
                  Join our 22,000 users and start managing your money with ease
                  today.
                </p>
              </div>
            </div>

            <div>
              <p>02</p>
              <div>
                <p>Verification</p>
                <p>
                  Join our 22,000 users and start managing your money with ease
                  today.
                </p>
              </div>
            </div>

            <div>
              <p>03</p>
              <div>
                <p>Launch 🚀</p>
                <p>
                  Join our 22,000 users and start managing your money with ease
                  today.
                </p>
              </div>
            </div>
          </Styled.ProjectSteps>

          <section>
            <div>
              <h3>
                Share thoughts. <span>Get Feedback</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aut, nihil adipisci tenetur perferendis at inventore
                sapiente deleniti dolor expedita?
              </p>
            </div>

            <div>
              <Image
                src='/scroll.svg'
                alt='main preview'
                width={30}
                height={30}
                className='scroll-logo'
              />
            </div>
          </section>

          <section>
            <div>
              <h3>Builders Profile</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aut, nihil adipisci tenetur perferendis at inventore
                sapiente deleniti dolor expedita?
              </p>
            </div>
            <div>
              <Image
                src='/scroll.svg'
                alt='main preview'
                width={30}
                height={30}
                className='scroll-logo'
              />
            </div>
          </section>
        </Styled.AddProject>
      </MainWrapper>
    </div>
  );
};

export default Home;
