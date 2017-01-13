import types from '../ActionTypes'


export const r = (payload = {}) => {
	return {
		type: types.TEST,
		payload,
	}
}

export const other = (payload = {}) => ({
	type: types.OTHER,
	payload,
})