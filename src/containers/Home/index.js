/**
 * Home
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {
  Text
} from 'react-native'
import Button from '../../components/Button'
import Wrapper from '../../components/Wrapper'

class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
      	<Text>Kondo react-native boilerplate</Text>
      	<Button> I am a button </Button>
      </Wrapper>
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