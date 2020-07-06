import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { BaseContainer } from '../BaseComponents';

interface IPageLayout {
  title: string;
}

const PageLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <StyledMain>
      <BaseContainer>{children}</BaseContainer>
    </StyledMain>
  </>
);

const StyledMain = styled.main`
  margin-top: 2.25rem;
`;

export default PageLayout;
