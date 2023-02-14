import React, { ReactNode } from 'react';
import styled from 'styled-components';
import SelectInput, { ISelectInputProps } from './select-input/SelectInput';
import TextInput, { ITextInputProps } from './text-input/TextInput';

interface IFormProps {
  children: ReactNode;
  onSubmit: (x: React.SyntheticEvent) => void;
}

interface FormItems {
  Input: React.FC<ITextInputProps>;
  Select: React.FC<ISelectInputProps>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
`;

const Form: React.FC<IFormProps> & FormItems = ({ children, onSubmit }) => {
  const onSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) onSubmit(event);
    else console.log('Invalid Form');
  };

  return (
    <form onSubmit={onSubmitForm} noValidate>
      <Wrapper>{children}</Wrapper>
    </form>
  );
};

Form.Input = TextInput;
Form.Select = SelectInput;

export default Form;
