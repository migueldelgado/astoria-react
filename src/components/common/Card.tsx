import React from 'react'
import styled from 'styled-components';

interface ICardProps {
  children: React.ReactNode;
}

interface ISubElements {
  Header: React.FC<ISubElementProps>;
  Body: React.FC<ISubElementProps>;
  Footer: React.FC<ISubElementProps>;
}

interface ISubElementProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: .3rem;
  padding: 1rem;
  background-color: #e7ecef;
`

const Card: React.FC<ICardProps> & ISubElements = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

Card.Header = ({ children }) => <div className="header">{children}</div>;
Card.Body = ({ children }) => <div className="body">{children}</div>;
Card.Footer = ({ children }) => <div className="footer">{children}</div>;

export default Card