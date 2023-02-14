import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ICSSTransitionProps {
  changeStateFlag: boolean; 
  children: React.ReactNode;
}

const Wrapper = styled.div`
  height: 0;
  transition: height .2s ease;
  overflow: hidden;
`

const CSSTransition: React.FC<ICSSTransitionProps> = ({ children, changeStateFlag }) => {

  const divContainer = useRef(null);

  const collapseSection = (element: any) => {
    element.style.height = 0 + 'px';
  }

  const expandSection = (element: any) => {
    const sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';
  }

  useEffect(() => {
    changeStateFlag ? 
      expandSection(divContainer.current) : 
      collapseSection(divContainer.current);
  },[changeStateFlag])

  return (
    <Wrapper ref={divContainer}>{children}</Wrapper>
  );
}

export default CSSTransition