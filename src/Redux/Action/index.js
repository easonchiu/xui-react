import types from '../ActionTypes'


export const setData = (payload = {}) => {
	return dispatch => {
		dispatch(setMyData(payload));
	}
}

export const setMyData = (payload = {}) => {
	return {
		type: types.TEST,
		payload,
	}
}
