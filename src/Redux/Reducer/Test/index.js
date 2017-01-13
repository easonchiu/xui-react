import types from '../../ActionTypes'

export default (state = {}, action = {}) => {
	switch (action.type) {
		  case types.TEST:
			
			return {
				...state
			};
		default:
			return state;
	}
}