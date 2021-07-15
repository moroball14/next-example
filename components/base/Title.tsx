import React from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`
  flex
  justify-center
  py-6
`;

interface P {
  id: string;
  titleJa: string;
  titleEn: string;
}

export const Title: React.FC<P> = ({id, titleJa, titleEn}) => {
  return (
    <Container id={id}>
      <div className="flex flex-col space-y-1 self-center md:flex-row md:space-x-2">
        <div className="font-bold text-3xl text-center">{titleJa}</div>
        <div className="text-teal-dark text-2xl text-center">{titleEn}</div>
      </div>
    </Container>
  );
};
