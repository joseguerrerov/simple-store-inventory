import { css } from 'styled-components';
import { colors, fonts } from './theme';

const BaseStyles = css`
  body {
    background-color: ${colors.surface};
    margin: 0;
    font-size: 16px;
    font-family: ${fonts.serif};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.sansSerif};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default BaseStyles;
