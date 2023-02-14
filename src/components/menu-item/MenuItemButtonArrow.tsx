import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';

export interface IMenuItemButtonArrow {
  label: string;
  icon: [IconPrefix, IconName];
  url: string;
  children: ReactNode;
}

const Button = styled.a`
  padding: 1rem;
  display: flex;
  text-decoration: none;
  color: darkgrey;
  &:hover {
    color: white;
  }
  &.active {
    color: white;
  }
  &::after {
    content: '>';
    margin-left: auto;
  }
`

const Wrapper = styled.div`
  padding-left: 2rem;
  overflow: hidden;
  transition: height .2s ease;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`

const MenuItemButtonArrow: React.FC<IMenuItemButtonArrow> = ({ label, url, icon, children }) => {

  const divContainer = useRef(null);
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const onClickButton = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowChildren(oldValue => !oldValue);
  }

  const collapseSection = (element: any) => {
    element.style.height = 0 + 'px';
  }

  const expandSection = (element: any) => {
    const sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';
  }

  useEffect(() => {
    showChildren ? 
      expandSection(divContainer.current) : 
      collapseSection(divContainer.current);
  },[showChildren])

  return (
    <div className="menu-item-arrow">
      <Button
        href={url}
        onClick={onClickButton}
      >
        {icon && <Icon icon={icon} />}
        {label}
      </Button>
      <Wrapper ref={divContainer}>
        {children}
      </Wrapper>
    </div>
  )
}

export default MenuItemButtonArrow;