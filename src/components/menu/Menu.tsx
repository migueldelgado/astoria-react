import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import MenuItemButton, { IMenuItemButton } from '../menu-item/MenuItemButton';
import MenuItemButtonArrow from '../menu-item/MenuItemButtonArrow';
import MenuItemTitle from '../menu-item/MenuItemTitle';
import Styles from './Menu.module.css';

import { generateRandomString } from '../../helper/helper';

interface IMenuProps {
  items: IMenuItem[];
}

export interface IMenuItem {
  type?: MenuType;
  label: string;
  icon?: [IconPrefix, IconName];
  url?: string;
  childItems?: {
    label: string;
    url: string;
  }[];
}

export enum MenuType {
  'button',
  'title',
  'sub'
}

const Menu: React.FC<IMenuProps> = ({ items }) => {

  const onClickMenuItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    console.log(target);
  }

  const onClickMenu = (event: React.MouseEvent) => {
    const children = event.currentTarget.children as HTMLCollection;
    const target = event.target as HTMLAnchorElement;

    if (!target.classList.contains('menu-item-button')) {
      return;
    }
    
    removeAllActiveClass(children);
    target.classList.add('active');
  }

  const removeAllActiveClass = (itemList: HTMLCollection) => {
    for(let i = 0 ; i < itemList.length ; i++) {
      const item = itemList[i] as HTMLElement;
      if (item.children.length > 0) {
        removeAllActiveClass(item.children);
      }
      item.classList.remove('active');
    }
  }

  const renderMenuItems = (items: IMenuItem[]) => {
    return items.map((menuItem: any) => {
      let item;
      const randomId = generateRandomString();
      menuItem.key = randomId;

      switch(menuItem.type) {
        case MenuType.title: item = <MenuItemTitle {...menuItem} />; break;
        case MenuType.button: item = <MenuItemButton {...menuItem} onClickItem={onClickMenuItem} />; break;
        case MenuType.sub: item = (
          <MenuItemButtonArrow {...menuItem} onClickItem={onClickMenuItem} >
            {
              menuItem.childItems.map((child: IMenuItemButton) => {
                const key = generateRandomString();
                return <MenuItemButton {...child} key={key} onClickItem={onClickMenuItem} />
            })
            }
          </MenuItemButtonArrow>
        ); break;
      }

      return item;
    })
  }

  return (
    <div className={Styles.menu} onClick={onClickMenu}>
      {renderMenuItems(items)}
    </div>
  )
}

export default Menu;