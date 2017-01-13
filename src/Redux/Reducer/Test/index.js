import types from '../../ActionTypes'

export default (state = {}, action = {}) => {
	switch (action.type) {
		case types.TEST:
			state = action.payload;
			return state;
		default:
			return state;
	}
}