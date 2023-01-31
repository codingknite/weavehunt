import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem 0 2rem 0;

  img {
    width: 90%;
    height: 40vh;
    margin-top: 1rem;
  }
`;

const Heading = styled.h3`
  font-size: 1.75rem;
  align-items: center;
  font-weight: 800;
  text-align: center;
  padding: 1rem 0 0.8rem 0;
  margin: 0;
`;

const Text = styled.p`
  text-align: center;
  padding: 0 1.5rem;
  margin: 0;
`;

const AllProjects = (props: Props) => {
  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      <Text>{props.text}</Text>
      <Image
        src={props.imageSrc}
        alt='feature preview'
        width={30}
        height={30}
      />
    </Wrapper>
  );
};

interface Props {
  heading: string;
  text: string;
  imageSrc: string;
}
export default AllProjects;
