import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as AddCircleIcon } from '../../Assets/Icons/AddCircle.svg';
import { colors, fonts, sizes } from '../../Styles/theme';

interface IProductListHeaderProps {
  title: string;
}

const SummaryProductListHeader: React.FC<IProductListHeaderProps> = ({
  title,
}) => (
  <Container>
    <h2>{title}</h2>
    <AddButton to="/producto/crear">
      <span>Añadir</span>
      <AddCircleIcon />
    </AddButton>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${sizes.card.horizontalPadding}
  ${sizes.card.verticalPadding}
  h2 {
    margin: 0;
    color: ${colors.blue.textDark};
    font-family: ${fonts.sansSerif};
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 1.1875rem;
    text-align: center;
    font-weight: 400;
  }
`;

const AddButton = styled(Link)`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  span {
    color: #161c38;
    font-family: ${fonts.sansSerif};
    font-size: 0.875rem;
    letter-spacing: 0;
    text-align: center;
    margin-right: 0.25rem;
  }
  svg {
    height: 24px;
    width: 24px;
    fill: ${colors.blue.light};
  }
`;
export default SummaryProductListHeader;
