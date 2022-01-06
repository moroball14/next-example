import Head from 'next/head';
import React, {useCallback, useEffect, useState} from 'react';
import tw from 'tailwind-styled-components';
import {Loading} from '../common/Loading';
// import tw from 'tailwind-styled-components';
// import styled from 'styled-components';
import {AboutMe} from './AboutMe';
import {FirstView} from './FirstView';
import {Footer} from './Footer';
import {Future} from './Future';
import {Header} from './Header';
import {Skills} from './Skills';
import {Values} from './Values';

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 312px 1fr;
//   height: 100%;
// `;

// const Main = styled.main`
//   background: #f8f9fc;
//   padding: 127px 80px;
// `;

const ValueFutureWrapper = tw.div`
  bg-futureSp
  bg-cover
  bg-no-repeat
  bg-bottom
  md:bg-future
`;

export const BasePage: React.FC = () => {
  const [initialized, setInitialized] = useState(false);
  const initialize = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 動作確認のためわざと3秒待つ
    setInitialized(true);
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {initialized ? (
        <>
          <Header />
          <FirstView />
          <AboutMe />
          <Skills />
          <ValueFutureWrapper>
            <Values />
            <Future />
          </ValueFutureWrapper>
          <Footer />
          {/* <Wrapper> */}
          {/* <SideNavigation />
            <Main>{children}</Main> */}
          {/* </Wrapper> */}
        </>
      ) : (
        <div className="w-screen h-screen">
          <Loading />
        </div>
      )}
    </div>
  );
};
