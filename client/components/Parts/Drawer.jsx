import React, { PropTypes } from 'react';
import Menu from './Menu';

export const Drawer = ({ handleDrawer }) => {
  return (
    <div className='drawer move-drawer-right' id='drawer'>
      <div>
        <div className='drawer-close' onClick={handleDrawer}>{'✖'}</div>
        <Menu drawerClass={'drawer-menu'} />
      </div>
    </div>
  );
};

Drawer.propTypes = {
  handleDrawer: PropTypes.func.isRequired
};

export default Drawer;
