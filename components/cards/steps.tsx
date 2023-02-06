import styled from 'styled-components';

interface StepProps {
  num: 1 | 2 | 3;
}

const Wrapper = styled.div<StepProps>`
  background: ${(props) =>
    props.num === 1 ? '#daf9f9' : props.num === 2 ? '#e2f1fd' : '#fdf1dd'};
  border-radius: 20px;
  margin: 1rem;
  padding: 0.8rem 0.5rem;
  display: flex;
  gap: 0.5rem;
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
    font-weight: 500;
  }

  > div {
    width: 80%;

    .heading {
      font-weight: 450;
      font-size: 1.25rem;
    }

    .text {
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

const Steps = (props: Props) => {
  return (
    <Wrapper num={props.num}>
      <p className='step-number'>0{props.num}</p>
      <div>
        <p className='heading'>{props.heading}</p>
        <p className='text'>{props.text}</p>
      </div>
    </Wrapper>
  );
};

interface Props {
  heading: string;
  text: string;
  num: 1 | 2 | 3;
}
export default Steps;
