import React, { PropTypes } from 'react';
import Menu from './Menu';

export const Header = ({ handleDrawer }) => {
  return (
    <div className='header'>
      <div className='hamburger' onClick={handleDrawer}></div>
      <div className='menu'>
        <Menu />
      </div>
    </div>
  );
};

Header.propTypes = {
  handleDrawer: PropTypes.func.isRequired
};

export default Header;
