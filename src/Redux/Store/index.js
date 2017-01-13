import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// import DevTools from '../../Assets/Js/DevTools'
import reducers from '../Reducer'


const composedCreateStore = compose(
	// DevTools.instrument(),
	applyMiddleware(thunk)
)(createStore);

const configureStore = (initialState = {}) => {
	const store = composedCreateStore(reducers, initialState);
	return store;
}

export default configureStore;
// export { DevTools };
