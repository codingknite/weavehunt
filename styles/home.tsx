import styled from 'styled-components';

export const IntroSectionWrapper = styled.section`
  background: url('/background1.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

export const IntroSection = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 95vh;

  > button {
    background: none;
    border: 1px solid #fff;
    padding: 0.5rem;
    margin: 1.5rem 0;
    border-radius: 8px;
    background: -webkit-linear-gradient(#e44949, #fafaff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  h1 {
    margin: 0;
    padding: 0 1rem;
    font-size: 2.8rem;
    text-align: center;
  }

  p {
    margin: 0;
    padding: 0 1rem;
    text-align: center;
    color: #a48b98;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    gap: 1rem;
    width: 85%;
    position: relative;

    .mail-icon {
      position: absolute;
      top: 5px;
      right: 30px;
      border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border: none;
      border-radius: 50%;
      background: linear-gradient(#280871, #95255e);
    }

    > input {
      padding: 1rem;
      background: #a48b98;
      background: #000;
      background: #d9d9d9;
      background: #fff;
      border: none;
      border-radius: 70px;
      outline: none;
      font-size: 0.95rem;

      &::placeholder {
        color: #000;
        font-size: 0.875rem;
      }
    }
  }

  .main-preview {
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  .scroll-logo {
    margin: 1.2rem 0;
  }
`;

export const ArweaveSection = styled.section`
  background: #f3f4f6;
  width: 100%;
  height: 30vh;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 2.3rem;
    font-weight: 700;
    text-align: center;
  }

  p {
    color: #545a62;
    font-size: 15px;
    margin-top: 1rem;
    text-align: center;
  }

  span {
    background: -webkit-linear-gradient(#280871, #95255e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
