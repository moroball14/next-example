import React from 'react';
import styled from 'styled-components';
import {BlogType} from '../types/BlogType';
import {Entry} from './Entry';

interface P {
  blogData: BlogType[];
}

const ListWrapper = styled.div`
  display: grid;
  gap: 32px;
  align-content: start;
`;

export const EntryList: React.FC<P> = ({blogData}) => {
  return (
    <ListWrapper>
      {blogData.map((blog) => (
        <Entry key={blog.id} entryData={blog} />
      ))}
    </ListWrapper>
  );
};
