import React, { useState } from 'react';
import styled from 'styled-components';

export interface ITextInputProps {
  name: string;
  type: string;
  value: string;
  onChange: (x: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  label?: string;
  errorMessage?: string;
}

const FormControl = styled.div``;
const Field = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  & > label {
    flex: 1;
  }
  & > input {
    flex: 6;
  }
`;

const Input = styled.input`
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.3rem;
`;

const ErrorMessage = styled.div`
  font-size: 10px;
  color: red;
`;

const TextInput: React.FC<ITextInputProps> = ({
  label,
  errorMessage,
  ...props
}) => {
  const [hasErros, setHasErros] = useState<boolean>(false);

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setHasErros(!event.target.validity.valid);
  };

  return (
    <FormControl>
      <Field>
        {label && <label>{label}</label>}
        <Input {...props} onBlur={onBlur} data-error={errorMessage} />
      </Field>
      {hasErros && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormControl>
  );
};

export default TextInput;
