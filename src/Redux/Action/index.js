import types from '../ActionTypes'


export const test = (payload = {}) => {
	return {
		type: types.TEST,
		payload,
	}
}

export const other = (payload = {}) => ({
	type: types.OTHER,
	payload,
})