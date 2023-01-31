import styled from 'styled-components';

const Wrapper = styled.div`
  background: #eaf8f8;
  border-radius: 20px;
  margin: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .step-number {
    background: #fff;
    width: fit-content;
    padding: 0.6rem;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2ebdb6;
  }

  div {
    /* background: purple; */
    width: 80%;
  }
`;

const Steps = () => {
  return (
    <Wrapper>
      <p className='step-number'>01</p>
      <div>
        <p>Download the app</p>
        <p>
          Join our 22,000 users and start managing your money with ease today.
        </p>
      </div>
    </Wrapper>
  );
};

export default Steps;
