/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './src/store'
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './src/containers/Home'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Route exact path="/" component={Home}/>
        </NativeRouter>
      </Provider>
    );
  }
}
