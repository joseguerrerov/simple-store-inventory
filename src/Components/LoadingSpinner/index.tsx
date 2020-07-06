import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoadingSpinner: React.FC = () => (
  <Container>
    <Loader
      type="Audio"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export default LoadingSpinner;
