import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

interface ITopBarProps {

}

const HamburgerButton = styled.button`
  padding: 1rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

const ToolButtons = styled.div`
  flex: 1;
`

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  min-height: 3rem;
  margin-bottom: 1.5rem;
  background-color: #e0e2db;
`

const Topbar: React.FC<ITopBarProps> = () => {
  return (
    <Wrapper>
      <HamburgerButton>
        <FontAwesomeIcon icon={['fas','bars']} size="2x" />
      </HamburgerButton>
      <ToolButtons>dlfsdijfisdf</ToolButtons>
    </Wrapper>
  );
};

export default Topbar;
