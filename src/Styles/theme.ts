import { css } from 'styled-components';

export const colors = {
  gray: '#70706A',
  borderGray: '#E5E8ED',
  surface: '#F0F2F6',
  white: '#FFFFFF',
  purple: '#492ACF',
  error: '#E34E7B',
  blue: {
    dark: '#282F3B',
    textDark: '#152150',
    light: '#4AAEF8',
  },
};

export const sizes = {
  header: {
    desktopHeight: '60px',
  },
  borderRadius: '8px',
  card: {
    verticalPadding: css`
      padding-top: 1.125rem;
      padding-bottom: 1.125rem;
    `,
    horizontalPadding: css`
      padding-left: 1rem;
      padding-right: 1rem;
    `,
  },
};

export const fonts = {
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  sansSerif:
    'Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
};

export const widthBreakPoints = {
  normalMobile: 340,
  tablet: 768,
  desktop: 1024,
  desktopWide: 1440,
};

export const mq = {
  normalMobile: `@media (min-width: ${widthBreakPoints.normalMobile}px)`,
  tablet: `@media (min-width: ${widthBreakPoints.tablet}px)`,
  desktop: `@media (min-width: ${widthBreakPoints.desktop}px)`,
  untilTablet: `@media (max-width: ${widthBreakPoints.tablet}px)`,
};
