import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';
import { getHomeContentRequest } from '../../actions/';
import Spinner from '../Parts/Spinner';

export const HomePage = ({ content, fetching }) => {
  if(fetching) return <div className='spinner-location'><Spinner /></div>;

  return (
    <div>{content.message}</div>
  );
};

HomePage.propTypes = {
  content: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    content: state.apiReducer.content,
    fetching: state.apiReducer.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getHomeContentRequest());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(HomePage));
