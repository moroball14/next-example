import Head from 'next/head';
import React from 'react';
// import tw from 'tailwind-styled-components';
// import styled from 'styled-components';
import {AboutMe} from './AboutMe';
import {FirstView} from './FirstView';
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

export const BasePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <FirstView />
      <AboutMe />
      <Skills />
      <Values />
      <Future />
      {/* <Wrapper> */}
      {/* <SideNavigation />
        <Main>{children}</Main> */}
      {/* </Wrapper> */}
    </div>
  );
};
