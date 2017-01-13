import types from '../../ActionTypes'

export default (state = {}, action = {}) => {
	switch (action.type) {
		case types.TEST:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}