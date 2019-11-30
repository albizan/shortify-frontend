import { combineReducers } from 'redux'

import { authReducer } from './auth.reducer'
import { linksReducer } from './links.reducer'

const reducers = combineReducers({
  authState: authReducer,
  linksState: linksReducer
})

export default reducers
