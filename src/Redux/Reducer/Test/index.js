import types from '../../ActionTypes'

export default (state = {}, action = {}) => {
	switch (action.type) {
		case types.TEST:
			state.p = action.payload;
			return state;
		default:
			return state;
	}
}