import types from '../ActionTypes'


export const setData = (payload = {}) => {
	return {
		type: types.TEST,
		payload,
	}
}
