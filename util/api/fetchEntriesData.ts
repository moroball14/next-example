import axios, {AxiosResponse} from 'axios';
import {EntryType} from '../../types/EntryType';

export const fetchEntriesData = async (): Promise<
  AxiosResponse<EntryType[]>
> => {
  return await axios.get<EntryType[], AxiosResponse<EntryType[]>>(
    'https://jsonplaceholder.typicode.com/posts',
  );
};

export const fetchEntryData = async (
  id: string,
): Promise<AxiosResponse<EntryType>> => {
  return await axios.get<EntryType, AxiosResponse<EntryType>>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
};
