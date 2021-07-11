import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import {Title} from './Title';
import {Header} from './Header';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 312px 1fr;
  height: 100%;
`;

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
      <Wrapper>
        <Title />
        {/* <SideNavigation />
        <Main>{children}</Main> */}
      </Wrapper>
    </div>
  );
};
