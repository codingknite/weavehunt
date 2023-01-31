import Image from 'next/image';
import * as Styled from './styles';
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const Nav = () => {
  return (
    <Styled.NavWrapper className={spaceGrotesk.className}>
      <Styled.Logo>
        <Image src='/logo.svg' alt='weavehunt logo' width={30} height={30} />
        WeaveHunt
      </Styled.Logo>

      <Styled.NavItems>
        <li>Changelog</li>
        <li>Discussions</li>
        <li>Jobs</li>
        <li>Blog</li>
        <li>Join Waitlist</li>
      </Styled.NavItems>
    </Styled.NavWrapper>
  );
};

export default Nav;
