import copyright from 'copyright';
import Image from 'next/image';
import React, {useMemo} from 'react';
import tw from 'tailwind-styled-components';
import facebook from '../../public/facebook.png';
import logoWhite from '../../public/logo_white.png';
import twitter from '../../public/twitter.png';

const FooterWrapper = tw.div`
  flex
  justify-center
  bg-navy
  w-full
  text-white
  p-4
`;

const FooterContentWrapper = tw.div`
  flex
  flex-col
`;

const LinksWrapper = tw.div`
  text-xs
  space-y-3
`;

const LinksRowWrapper = tw.div`
  flex
  justify-center
  space-x-3
`;

const ImageWrapper = tw.div`
  self-center
  w-32
  h-32
  my-8
`;

const SnsWrapper = tw.div`
  flex
  justify-between
  self-center
  w-24
  my-8
`;

const CopyWrite = tw.div`
  self-center
`;

export const Footer: React.FC = () => {
  const COPYRIGHT = useMemo(
    () =>
      copyright({
        name: 'KIKAGAKU',
        short: true,
      }),
    [],
  );

  return (
    <FooterWrapper>
      <FooterContentWrapper>
        <LinksWrapper>
          <LinksRowWrapper>
            <div>お問い合わせ</div>
            <div>助成金について</div>
          </LinksRowWrapper>
          <LinksRowWrapper>
            <div>特定商取引法に基づく表記</div>
            <div>プライバシーポリシー</div>
          </LinksRowWrapper>
        </LinksWrapper>
        <ImageWrapper>
          <Image src={logoWhite} alt={'logo'} />
        </ImageWrapper>
        <SnsWrapper>
          <Image src={twitter} alt={'twitter'} />
          <Image src={facebook} alt={'facebook'} />
        </SnsWrapper>
        <CopyWrite>{COPYRIGHT}</CopyWrite>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};
