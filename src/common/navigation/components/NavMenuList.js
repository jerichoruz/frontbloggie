import React from 'react';

import NavMenuItem from './NavMenuItem';

const SmartMenuList = (props) => {
  const { items, ...p } = props;

  return (
    <ul {...p}>
      {items.map((item) => (
        <NavMenuItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default SmartMenuList;
