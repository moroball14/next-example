import React, {useContext} from 'react';
import styled from 'styled-components';
import {IndexContext} from '../../contexts/IndexContext';
import {Entry} from './Entry';

const ListWrapper = styled.div`
  display: grid;
  gap: 32px;
  align-content: start;
`;

export const EntryList: React.FC = () => {
  const {blogList} = useContext(IndexContext);

  if (!blogList) return <div>loading...</div>;

  return (
    <ListWrapper>
      {blogList.map((blog) => (
        <Entry key={blog.id} entryData={blog} />
      ))}
    </ListWrapper>
  );
};
