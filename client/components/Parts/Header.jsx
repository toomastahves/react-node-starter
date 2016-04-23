import React from 'react';
import { Link } from 'react-router';

const handleDrawer = () => {
  document.getElementById('drawer').classList.toggle('drawer-open');
};

export const Header = () => {
  return (
    <div className='header'>
      <div className='hamburger' onClick={handleDrawer}></div>
      <div className='menu'>
        <Link to={'home'} activeClassName='menu-link-active'>{'Home'}</Link>
        <Link to={'about'} activeClassName='menu-link-active'>{'About'}</Link>
      </div>
    </div>
  );
};

export default Header;
