/*
* Button
*/

import React from 'react'
import { Wrapper } from './styled'
import {
	Text
} from 'react-native'

const Button = (props) => {
  return (
    <Wrapper>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}

Button.propTypes = {

};

export default Button;