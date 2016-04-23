import React from 'react';
import Drawer from '../Parts/Drawer';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';

const handleDrawer = () => {
  document.getElementById('drawer').classList.toggle('drawer-open');
};

export const ContentLayout = (SubComponent) => {

  const Sub = (props) => {
    return (
      <div className='wrapper'>
        <Drawer handleDrawer={handleDrawer} />
        <Header handleDrawer={handleDrawer} />
        <div className='content'>
          <SubComponent {...props} />
        </div>
        <Footer />
      </div>
    );
  };

  return Sub;
};

export default ContentLayout;
