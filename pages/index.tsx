import {GetStaticProps} from 'next';
import {BasePage} from '../components/base/BasePage';
import {EntryList} from '../components/index/EntryList';
import {IndexContext, IndexContextType} from '../contexts/IndexContext';
import {BlogType} from '../types/BlogType';
import {fetchBlogsData} from '../util/api/fetchBlogsData';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetchBlogsData();

  const blogList = (await response.data) as BlogType[];

  return {
    props: {
      blogList,
    },
  };
};

const IndexPage: React.FC<{blogList: BlogType[]}> = ({blogList}) => {
  const contextValue: IndexContextType = {
    blogList,
  };
  return (
    <IndexContext.Provider value={contextValue}>
      <BasePage>
        <EntryList />
      </BasePage>
    </IndexContext.Provider>
  );
};

export default IndexPage;
