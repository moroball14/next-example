import React from 'react';
import styled from 'styled-components';
import {BlogType} from '../types/BlogType';

interface P {
  entryData: BlogType;
}

const EntryWrapper = styled.div`
  width: 720px;
  left: 440px;
  top: 80px;
  background: #ffffff;
  border: 1px solid #f1f3fa;
  box-sizing: border-box;
  box-shadow: 2px 8px 30px rgba(48, 55, 120, 0.04);
  border-radius: 14px;
  padding: 32px 24px;
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
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #30345f;
`;

const EntryLink = styled.header`
  font-weight: 500;
  font-size: 11px;
  color: #3f3f9d;
`;

export const Entry: React.FC<P> = ({entryData: {id, title, body}}) => {
  return (
    <EntryWrapper>
      <EntryHeader>
        <EntryMedium>{id}</EntryMedium>
      </EntryHeader>
      <EntryTitle>{title}</EntryTitle>
      <EntryLink>{body}</EntryLink>
    </EntryWrapper>
  );
};
