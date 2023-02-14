import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';

export interface IMenuItemButton {
  label: string;
  icon?: [IconPrefix, IconName];
  url: string;
  onClickItem: (x: React.MouseEvent<HTMLAnchorElement>) => void;
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
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`

const MenuItemButton: React.FC<IMenuItemButton> = ({ label, url, icon, onClickItem }) => {
  const onClickButton = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClickItem(event);
  }

  return (
    <Button
      href={url}
      onClick={onClickButton}
      className="menu-item-button"
    >
      {icon && <Icon icon={icon} />}
      {label}
    </Button>
  )
}

export default MenuItemButton;