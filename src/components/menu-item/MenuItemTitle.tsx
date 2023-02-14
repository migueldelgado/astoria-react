import React from 'react';
import styled from 'styled-components';

export interface IMenuItemTitle {
  label: string;
}

const Title = styled.h4`
  margin: 0;
  padding: 1rem;
  color: darkgrey;
  font-size: 1rem;
`

const MenuItemTitle: React.FC<IMenuItemTitle> = ({ label }) => {
  return (
    <div className="menu-item-title">
      <Title>{label}</Title>
    </div>
  )
}

export default MenuItemTitle;