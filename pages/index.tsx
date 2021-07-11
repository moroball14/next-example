import {GetStaticProps} from 'next';
import {BasePage} from '../components/base/BasePage';
import {IndexContext, IndexContextType} from '../contexts/IndexContext';
import {EntryType} from '../types/EntryType';
import {fetchEntriesData} from '../util/api/fetchEntriesData';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetchEntriesData();

  const entryList = (await response.data) as EntryType[];

  return {
    props: {
      entryList: entryList,
    },
  };
};

const IndexPage: React.FC<{entryList: EntryType[]}> = ({entryList}) => {
  const contextValue: IndexContextType = {
    entryList,
  };
  return (
    <IndexContext.Provider value={contextValue}>
      <BasePage />
      {/* <EntryList /> */}
    </IndexContext.Provider>
  );
};

export default IndexPage;
