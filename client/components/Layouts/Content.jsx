import React, { PropTypes } from 'react';
import Drawer from '../Parts/Drawer';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';

export const ContentLayout = (SubComponent) => {

  const Sub = (props) => {
    return (
      <div className='wrapper'>
        <Drawer />
        <Header />
        <div className='content'>
          <SubComponent {...props} />
        </div>
        <Footer />
      </div>
    );
  };

  return Sub;
};

ContentLayout.propTypes = {

};

export default ContentLayout;
