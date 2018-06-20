/*
* Button
*/

import React from 'react'
import { Wrapper } from './styled'

const Button = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

Button.propTypes = {

};

export default Button;