import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from '../Reducer'

const composedCreateStore = compose(
	applyMiddleware(thunk)
)(createStore);

const configureStore = (initialState = {}) => {
	const store = composedCreateStore(reducers, initialState);
	return store;
}

export default configureStore;

