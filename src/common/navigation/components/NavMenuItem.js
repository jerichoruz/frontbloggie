import $ from 'jquery';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Msg } from '../../i18n';

import SmartMenuList from './NavMenuList';

const SmartMenuItem = ({ item }) => {
  const location = useLocation();
  const onLinkClick = (e) => {
    const $body = $('body');
    const $html = $('html');

    if (!$body.hasClass('menu-on-top')) {
      $html.removeClass('hidden-menu-mobile-lock');
      $body.removeClass('hidden-menu');
      $body.removeClass('minified');
    } else if (
      $body.hasClass('menu-on-top') &&
      $body.hasClass('mobile-view-activated')
    ) {
      $html.removeClass('hidden-menu-mobile-lock');
      $body.removeClass('hidden-menu');
      $body.removeClass('minified');
    }
  };

  const title = !item.parent ? (
    <span className="menu-item-parent">
      <Msg phrase={item.title} />
    </span>
  ) : (
    <Msg phrase={item.title} />
  );

  const badge = item.badge ? (
    <span className={item.badge.class}>{item.badge.label || ''}</span>
  ) : null;
  const childItems = item.items ? <SmartMenuList items={item.items} /> : null;

  const icon = item.icon ? (
    item.counter ? (
      <i className={item.icon}>
        <em>{item.counter}</em>
      </i>
    ) : (
      <i className={item.icon} />
    )
  ) : null;

  const liClassName = isItemActive(item, location) ? 'active' : '';

  const link = item.route ? (
    <Link
      to={item.route}
      title={item.title}
      activeClassName="active"
      onClick={onLinkClick}
    >
      {icon} {title} {badge}
    </Link>
  ) : (
    <a href={item.href || '#'} title={item.title}>
      {icon} {title} {badge}
    </a>
  );

  return (
    <li className={liClassName}>
      {link}
      {childItems}
    </li>
  );
};

const isItemActive = (item, location) => {
  if (item.route) {
    return item.route === location.pathname;
  }
  if (item.items) {
    return item.items.some((_) => isItemActive(_, location));
  }
  return false;
};

export default SmartMenuItem;
