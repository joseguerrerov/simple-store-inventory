import React from 'react';
import { BaseInputContainer } from '../BaseComponents';

interface ITextAreaProps {
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  value?: string | number;
  error: string;
  rows?: number;
}

const TextArea: React.FC<ITextAreaProps> = ({
  name,
  label,
  onChange,
  onBlur,
  value,
  error,
  rows,
}) => (
  <BaseInputContainer>
    <label>{label}</label>
    <textarea
      className={error ? 'error' : ''}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      rows={rows}
    />
    {error && <span>{error}</span>}
  </BaseInputContainer>
);

TextArea.defaultProps = {
  rows: 5,
};

export default TextArea;
