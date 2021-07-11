import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {articleStyle} from '../../styles/mixin/_article';
import {EntryType} from '../../types/EntryType';

interface P {
  entryData: EntryType;
}

const EntryWrapper = styled.div`
  ${articleStyle}
`;

const EntryHeader = styled.header`
  display: flex;
`;

const EntryMedium = styled.div`
  display: grid;
  place-items: center;
  height: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: #edeef8;
  border: 1px solid #3f3f9d;
  border-radius: 4px;
  font-size: 12px;
  color: #3f3f9d;
`;

const EntryTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  color: #30345f;
`;

const EntryLink = styled.header`
  font-weight: bold;
  font-size: 11px;
  color: #3f3f9d;
`;

export const Entry: React.FC<P> = ({entryData: {id, title, body}}) => {
  return (
    <Link href={`/entry/${id}`} passHref>
      <EntryWrapper>
        <EntryHeader>
          <EntryMedium>{id}</EntryMedium>
        </EntryHeader>
        <EntryTitle>{title}</EntryTitle>
        <EntryLink>{body}</EntryLink>
      </EntryWrapper>
    </Link>
  );
};
