import { combineReducers } from 'redux'

import { authReducer } from './auth.reducer'
import { formReducer } from './form.reducer'

const reducers = combineReducers({
  authState: authReducer,
  formState: formReducer
})

export default reducers
