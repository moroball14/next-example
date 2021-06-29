import axios, {AxiosResponse} from 'axios';
import {BlogType} from '../../types/BlogType';

export const fetchBlogsData = async (): Promise<AxiosResponse<BlogType[]>> => {
  return await axios.get<BlogType[], AxiosResponse<BlogType[]>>(
    'https://jsonplaceholder.typicode.com/posts',
  );
};

export const fetchBlogData = async (
  id: string,
): Promise<AxiosResponse<BlogType>> => {
  return await axios.get<BlogType, AxiosResponse<BlogType>>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
};
