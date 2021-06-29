import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import {SideNavigation} from '../SideNavigation';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 312px 1fr;
  height: 100%;
`;

const Main = styled.main`
  background: #f8f9fc;
  padding-top: 127px;
  padding-left: 80px;
`;

export const BasePage: React.FC = ({children}) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <SideNavigation />
        <Main>{children}</Main>
      </Wrapper>
    </div>
  );
};
