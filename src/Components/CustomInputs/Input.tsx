import React from 'react';
import { BaseInputContainer } from '../BaseComponents';

interface IInputProps {
  label: string;
  name: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string | number;
  error: string;
}

const Input: React.FC<IInputProps> = ({
  name,
  label,
  type,
  onChange,
  onBlur,
  value,
  error,
}) => (
  <BaseInputContainer>
    <label>{label}</label>
    <input
      className={error ? 'error' : ''}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
    {error && <span>{error}</span>}
  </BaseInputContainer>
);

export default Input;
