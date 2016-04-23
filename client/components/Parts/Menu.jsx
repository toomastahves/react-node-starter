import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const Menu = ({ drawerClass }) => {
  return (
    <div className={drawerClass}>
      <Link className='menu-link' to={'home'} activeClassName='menu-link-active'>{'Home'}</Link>
      <Link className='menu-link' to={'about'} activeClassName='menu-link-active'>{'About'}</Link>
    </div>
  );
};

Menu.propTypes = {
  drawerClass: PropTypes.string
};

export default Menu;
