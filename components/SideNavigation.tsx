import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  padding-top: 64px;
  display: grid;
  justify-content: center;
  align-content: flex-start;
  background: #ffffff;
  box-shadow: 2px 0px 4px rgba(48, 55, 120, 0.05);
  text-align: left;
`;

const AuthorWrapper = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #3f3f9d;
`;

const JobParagraph = styled.p`
  font-size: 13px;
  color: #7979a9;
`;

export const SideNavigation = () => {
  return (
    <NavigationWrapper>
      <AuthorWrapper>Daiki Morokoshi</AuthorWrapper>

      <JobParagraph>Frontend Developer</JobParagraph>
    </NavigationWrapper>
  );
};
