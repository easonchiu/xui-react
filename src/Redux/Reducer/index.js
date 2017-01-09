import { actions } from '../Action'

const initialState = {}

export const testReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case actions.TEST:
			state.payload = action.payload;
			return state;
		default:
			return state;
	}
}


export const otherReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case actions.OTHER:
			state.payload = action.payload;
			return state;
		default:
			return state;
	}
}