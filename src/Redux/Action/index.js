import keyMirror from 'keyMirror'

export const actions = keyMirror({
	TEST: null,
	OTHER: null,
})

export const testAction = (payload = {}) => ({
	type: actions.TEST,
	payload,
})

export const otherAction = (payload = {}) => ({
	type: actions.OTHER,
	payload,
})