import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BaseContainer } from '../BaseComponents';
import { colors, fonts, sizes } from '../../Styles/theme';
import { ReactComponent as Logo } from '../../Assets/Icons/Logo.svg';

const Header: React.FC = () => (
  <StyledHeader>
    <StyledBaseContainer>
      <Link to="/">
        <Logo />
        <Title>Tienda la Delicia</Title>
      </Link>
    </StyledBaseContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background-color: ${colors.blue.dark};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const StyledBaseContainer = styled(BaseContainer)`
  display: flex;
  height: ${sizes.header.desktopHeight};
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

const Title = styled.span`
  color: ${colors.white};
  font-family: ${fonts.sansSerif};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  margin-left: 10px;
`;

export default Header;
