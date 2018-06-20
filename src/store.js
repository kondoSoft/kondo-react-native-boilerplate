import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger'

export const store = createStore(
  () => ({hello: 'hola'}),
  composeWithDevTools(
    applyMiddleware(logger)
  )
)