import { createStore, applyMiddleware } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';

export const store = createStore(
  () => ({hello: 'hola'}),
  devToolsEnhancer()
)