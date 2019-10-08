import { createStore } from 'redux'
import reducers from '../reducers'

export const store = createStore(
  reducers,
  // Used to activate redux dev tools extension for google chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
