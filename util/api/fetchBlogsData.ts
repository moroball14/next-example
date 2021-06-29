import axios, {AxiosResponse} from 'axios';
import {BlogType} from '../../types/BlogType';

export const fetchBlogsData = async () => {
  return await axios.get<BlogType[], AxiosResponse<BlogType[]>>(
    'https://jsonplaceholder.typicode.com/posts',
  );
};

export const fetchBlogData = async (id: string) => {
  return await axios.get<BlogType, AxiosResponse<BlogType>>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
};
