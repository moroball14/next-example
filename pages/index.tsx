import {GetStaticProps} from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import {EntryList} from '../components/EntryList';
import {SideNavigation} from '../components/SideNavigation';
import {IndexContext, IndexContextType} from '../contexts/IndexContext';
import {BlogType} from '../types/BlogType';
import {fetchBlogsData} from '../util/api/fetchBlogsData';

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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetchBlogsData();

  const blogList = (await response.data) as BlogType[];

  return {
    props: {
      blogList,
    },
  };
};

const Index: React.FC<{blogList: BlogType[]}> = ({blogList}) => {
  const contextValue: IndexContextType = {
    blogList,
  };
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexContext.Provider value={contextValue}>
        <Wrapper>
          <SideNavigation />
          <Main>
            <EntryList />
          </Main>
        </Wrapper>
      </IndexContext.Provider>
    </div>
  );
};

export default Index;
