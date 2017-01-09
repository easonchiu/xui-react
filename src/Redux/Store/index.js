import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import * as reducer from '../Reducer'


let store = createStore(
	combineReducers(reducer),
	applyMiddleware(thunk)
)

export default store;

