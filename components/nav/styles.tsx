import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  height: 5vh;
  padding: 2rem 1rem;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .close-nav-menu {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.32rem;
  font-weight: 650;
  gap: 0.4rem;
  color: #fff;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 35px;
  background: #f3f4f6;
  width: 85%;
  height: 250px;
  margin: 0;
  padding: 1rem;
  border-radius: 12px;
  transition: all ease-in-out 300ms;

  li {
    text-decoration: none;
    list-style: none;
    text-align: right;
    margin-top: 1rem;

    &::after {
      content: '';
      display: block;
      height: 0.5px;
      background: #d0d0ce;
      margin-top: 0.2rem;
    }
  }

  button {
    background: #000;
    margin-top: 1rem;
    width: fit-content;
    align-self: flex-end;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    color: #fff;
    outline: none;
  }
`;
