import {createContext} from 'react';
import {EntryType} from '../types/EntryType';

export type IndexContextType = {
  entryList?: EntryType[];
};

export const IndexContext = createContext<IndexContextType>({
  entryList: undefined,
});
