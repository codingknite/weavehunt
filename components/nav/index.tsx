import Image from 'next/image';
import * as Styled from './styles';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { Space_Grotesk } from '@next/font/google';
import { useState } from 'react';
import 'animate.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.NavWrapper className={spaceGrotesk.className}>
      <Styled.Logo>
        <Image src='/logo.svg' alt='weavehunt logo' width={30} height={30} />
        WeaveHunt
      </Styled.Logo>

      <div>
        {isOpen ? (
          <RxCross2
            color='#fff'
            size={24}
            className='close-nav'
            onClick={handleNav}
          />
        ) : (
          <RxHamburgerMenu
            color='#fff'
            size={24}
            className='hamburger-menu'
            onClick={handleNav}
          />
        )}
      </div>

      <Styled.NavItems
        className={`${
          isOpen
            ? 'animate__animated animate__slideInDown'
            : 'animate__animated animate__fadeOutUpBig'
        }`}
      >
        <li>Changelog</li>
        <li>Discussions</li>
        <li>Jobs</li>
        <li>Blog</li>
        <button className={spaceGrotesk.className}>Join Waitlist</button>
      </Styled.NavItems>
    </Styled.NavWrapper>
  );
};

export default Nav;
