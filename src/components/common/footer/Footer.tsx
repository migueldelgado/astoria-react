import React from 'react';
import styled from 'styled-components';

interface IFooterProps {
  message: string;
}

const Wrapper = styled.div`
  min-height: 2rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  background-color: #e7ecef;
`

const Footer: React.FC<IFooterProps> = ({ message }) => {
  return (
    <Wrapper>{message}</Wrapper>
  );
};

export default Footer;
