import {createContext} from 'react';
import {BlogType} from '../types/BlogType';

export type IndexContextType = {
  blogList?: BlogType[];
};

export const IndexContext = createContext<IndexContextType>({
  blogList: undefined,
});
