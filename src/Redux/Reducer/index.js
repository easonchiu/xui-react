import { actions } from '../Action'

export const testReducer = (state = {}, action = {}) => {
	switch (action.type) {
		case actions.TEST:
			state.payload = action.payload;
			return state;
		default:
			return state;
	}
}


export const otherReducer = (state = {}, action = {}) => {
	switch (action.type) {
		case actions.OTHER:
			state.payload = action.payload;
			return state;
		default:
			return state;
	}
}