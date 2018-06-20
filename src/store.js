import { createStore, applyMiddleware } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import reducers from './reducers'

export const store = createStore(
  reducers,
  devToolsEnhancer()
)