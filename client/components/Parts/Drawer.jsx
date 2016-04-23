import React from 'react';
import { Link } from 'react-router';

const handleDrawer = () => {
  document.getElementById('drawer').classList.toggle('drawer-open');
};

export const Drawer = () => {
  return (
    <div className='drawer move-drawer-right' id='drawer'>
      <div className='drawer-menu'>
        <div className='drawer-close' onClick={handleDrawer}>{'✖'}</div>
        <Link to={'home'} activeClassName='menu-link-active'>{'Home'}</Link>
        <Link to={'about'} activeClassName='menu-link-active'>{'About'}</Link>
      </div>
    </div>
  );
};

export default Drawer;
