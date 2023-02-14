import React from 'react';
import Menu, { IMenuItem } from '../../menu/Menu';
import SideBarCSS from './Sidebar.module.css';

interface ISideBarProps {
  logo?: string;
  menuItems: IMenuItem[];
  footer?: string;
}

const SideBar: React.FC<ISideBarProps> = ({ logo, menuItems, footer }) => {
  return (
    <div className={SideBarCSS.container}>
      <div className={SideBarCSS.header}>
        {logo && <img src={logo} alt="" className={SideBarCSS.logo} />}
      </div>
      <div className={SideBarCSS.content}>
        <Menu items={menuItems} />
      </div>
      <div className={SideBarCSS.footer}>
          {footer}
      </div>
    </div>
  )
}

export default SideBar;