import styled from 'styled-components';
import { colors, fonts, mq, sizes } from '../../Styles/theme';

export const BaseContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 992px;
  margin: 0 auto;
`;

export const BasePageTitle = styled.h1`
  color: ${colors.blue.textDark};
  font-family: ${fonts.sansSerif};
  font-size: 1.125rem;
  letter-spacing: 0;
  line-height: 1.375rem;
  font-weight: 500;
  margin-bottom: 1.625rem;
`;

export const BaseCard = styled.div`
  border: 1px solid ${colors.borderGray};
  border-radius: ${sizes.borderRadius};
  background-color: ${colors.white};
`;

export const BaseInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.95rem;
  label {
    color: ${colors.blue.textDark};
    font-family: ${fonts.sansSerif};
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 14px;
    margin-bottom: 0.75rem;
  }
  input,
  textarea {
    border: 1px solid ${colors.borderGray};
    border-radius: ${sizes.borderRadius};
    background-color: #f9fafb;
    padding: 0.5rem 0.75rem;
    color: ${colors.blue.textDark};
    font-family: ${fonts.sansSerif};
    font-size: 14px;
    letter-spacing: 0;
    line-height: 17px;
    resize: none;
    appearance: none;
    &.error {
      border-color: ${colors.error};
    }
  }
  span {
    color: ${colors.error};
    font-family: ${fonts.sansSerif};
    font-size: 12px;
    letter-spacing: 0;
    line-height: 10px;
    margin-top: 0.5rem;
  }
`;

export const MultipleInputRow = styled.div`
  ${mq.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const BaseSubmitBtn = styled.button<{ error?: boolean }>`
  font-size: 12px;
  cursor: pointer;
  border: none;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
  border-radius: ${sizes.borderRadius};
  font-family: ${fonts.sansSerif};
  min-width: 98px;
  padding: 0.65rem 1rem;
  background-color: ${(props) => (props.error ? colors.error : colors.purple)};
  color: ${colors.white};
  &[disabled] {
    background: ${colors.gray};
  }
`;
