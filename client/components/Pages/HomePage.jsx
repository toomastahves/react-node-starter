import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';

export const HomePage = () => {
  return (
    <div>{'HomePage'}</div>
  );
};

HomePage.propTypes = {

};

export default ContentLayout(HomePage);
