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
  const {entryList} = useContext(IndexContext);

  if (!entryList) return <div>loading...</div>;

  return (
    <ListWrapper>
      {entryList.map((entry) => (
        <Entry key={entry.id} entryData={entry} />
      ))}
    </ListWrapper>
  );
};
