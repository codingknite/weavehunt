import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';
import type { NextPage } from 'next';
import { Space_Grotesk } from '@next/font/google';
import { AiOutlineSend } from 'react-icons/ai';
import { FiRotateCcw } from 'react-icons/fi';
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
          <h2>All Projects in One Place</h2>
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

            <Steps
              heading='Download'
              text='Join our 22,000 users and start managing your money with ease today.'
              num={1}
            />
            <Steps
              heading='Verify'
              text='Join our 22,000 users and start managing your money with ease today.'
              num={2}
            />
            <Steps
              heading='Launch'
              text='Join our 22,000 users and start managing your money with ease today.'
              num={3}
            />
          </Styled.ProjectSteps>

          <Styled.FeedbackSection>
            <div className='launch'>
              <h3>
                Get Feedback
                <span>
                  Re-Launch 🚀
                </span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aut, nihil adipisci tenetur perferendis at inventore
                sapiente deleniti dolor expedita?
              </p>
            </div>

            <Image
              src='/feedback.svg'
              alt='main preview'
              width={30}
              height={30}
            />
          </Styled.FeedbackSection>

          <Styled.FeedbackSection>
            <div className='launch'>
              <h3>Build Your Profile</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aut, nihil adipisci tenetur perferendis at inventore
                sapiente deleniti dolor expedita?
              </p>
            </div>

            <Image
              src='/profile.svg'
              alt='main preview'
              width={30}
              height={30}
              className='profile-preview'
            />
          </Styled.FeedbackSection>
        </Styled.AddProject>

        <Styled.CommunitySection>
          <h3>Become Part of A Vibrant Community</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Faucibus id molestie velit
            duis vestibulum ac.
          </p>

          <div>
            <div className='comm-item'>
              <div className='comm-item-info'>
                <h3>Arweave TownSquare</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <Image
                src='/tsquare.svg'
                alt='main preview'
                width={30}
                height={30}
                className='profile-preview'
              />
            </div>

            <div className='comm-item'>
              <div className='comm-item-info'>
                <h3>
                  <span>Events</span>
                  <span>Meetups</span>
                  <span>Hackathons</span>
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime aspernatur sunt blanditiis, voluptates nulla natus
                  totam numquam. Alias, quisquam qui?
                </p>
              </div>

              <Image
                src='/events.svg'
                alt='main preview'
                width={30}
                height={30}
                className='profile-preview'
              />
            </div>
          </div>
        </Styled.CommunitySection>

        <Styled.JobSection>
          <h3>
            Find your next <Styled.SpecialText>opportunity </Styled.SpecialText>
            in Arweave
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            molestias quibusdam quae cupiditate cumque. Quam!
          </p>

          <Image
            src='/jobs.svg'
            alt='main preview'
            width={30}
            height={30}
            className='profile-preview'
          />
        </Styled.JobSection>

        <Styled.GetStartedSection>
          <div>
            <h3>Get Started With WeaveHunt</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore
              earum accusamus sed ducimus adipisci?
            </p>
          </div>

          <Styled.CTA>
            <input
              type='text'
              placeholder='Enter Email to Join Waitlist'
              className={spaceGrotesk.className}
            />
            <button>Subscribe</button>
          </Styled.CTA>
        </Styled.GetStartedSection>
      </MainWrapper>

      <Styled.Footer>
        <Image
          src='/logo-black.svg'
          alt='main preview'
          width={35}
          height={35}
        />

        <p>© WeaveHunt 2023. All rights reserved</p>
      </Styled.Footer>
    </div>
  );
};

export default Home;
