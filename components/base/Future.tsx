import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import future from '../../public/future.png';
import {Title} from './Title';

const ImageBase = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  @media (max-width: 768px) {
    margin-left: calc(((100vw - 100%) / 2) * -1);
    margin-right: calc(((100vw - 100%) / 2) * -1);
  }
`;

const FutureWrapper = tw.div`
  px-4
  pt-2
  md:pb-24
  md:bg-cover
  md:px-32
  lg:pb-20
  lg:px-52
  xl:px-64
`;

const FutureContentsWrapper = tw.div`
  flex
  flex-col
  pb-0
  md:flex-row
  md:justify-between
`;

const FutureTextContent = tw.div`

`;

const FutureImageContent = tw(ImageBase)`
  md:mr-0
  md:ml-0
  md:flex
  md:flex-wrap
  md:content-center
`;

export const Future: React.FC = () => {
  return (
    <FutureWrapper>
      <FutureContentsWrapper>
        <FutureTextContent>
          <Title
            id={'future'}
            titleJa={'3年後やりたいこと'}
            titleEn={'FUTURE'}
            isCenter={false}
          />
          <div className="break-words leading-loose text-gray-500">
            3年後はフロントエンドのスペシャリストになっていたい。
          </div>
        </FutureTextContent>
        <FutureImageContent>
          <Image src={future} alt={'future'} />
        </FutureImageContent>
      </FutureContentsWrapper>
    </FutureWrapper>
  );
};
