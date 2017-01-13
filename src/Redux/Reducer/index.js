import { combineReducers } from 'redux'
import { actions } from '../Action'

const testReducer = (state = {}, action = {}) => {
	switch (action.type) {
		case actions.TEST:
			state.payload = action.payload;
			return state;
		default:
			return state;
	}
}


const otherReducer = (state = {}, action = {}) => {
	switch (action.type) {
		case actions.OTHER:
			state.payload = action.payload;
			return state;
		default:
			return state;
	}
}


let reducer = {
	testReducer,
	otherReducer,
}


let a = ...reducer;
console.log(a)


export default otherReducer






