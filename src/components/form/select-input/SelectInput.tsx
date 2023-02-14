import React from 'react';
import styled from 'styled-components';

export interface ISelectInputProps {
  name: string;
  value: string;
  options: any[];
  errorMessage: string;
}

const FormControl = styled.div``;

const SelectInput: React.FC<ISelectInputProps> = ({ ...props }) => {
  return (
    <FormControl>
      <input {...props} />
    </FormControl>
  );
};

export default SelectInput;
