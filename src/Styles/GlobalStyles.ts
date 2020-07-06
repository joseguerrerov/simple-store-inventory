import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import BaseStyles from './BaseStyles';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${BaseStyles}
`;

export default GlobalStyles;
