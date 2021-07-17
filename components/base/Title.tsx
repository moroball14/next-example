import React from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div<{
  $isCenter: boolean;
}>`
  flex
  justify-center
  py-6
  ${(p) => (p.$isCenter ? 'md:justify-center' : 'md:justify-start')}
`;

const TitleWrapper = tw.div`
  flex
  flex-col
  space-y-1
  self-center
  md:flex-row
  md:space-x-2
`;

const TitleJaWrapper = tw.div`
  font-bold
  text-3xl
  text-center
`;

const TitleEnWrapper = tw.div`
  text-teal-dark
  text-2xl
  text-center
`;

interface P {
  id: string;
  titleJa: string;
  titleEn: string;
  isCenter?: boolean;
}

export const Title: React.FC<P> = ({id, titleJa, titleEn, isCenter = true}) => {
  return (
    <Container id={id} $isCenter={isCenter}>
      <TitleWrapper>
        <TitleJaWrapper>{titleJa}</TitleJaWrapper>
        <TitleEnWrapper>{titleEn}</TitleEnWrapper>
      </TitleWrapper>
    </Container>
  );
};
