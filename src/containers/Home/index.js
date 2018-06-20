/**
 * Home
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>

      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)