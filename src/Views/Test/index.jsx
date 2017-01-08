import React, { Component } from 'react'


import { createStore } from 'redux'
import keyMirror from 'keyMirror'
import { is, fromJS } from 'immutable'


const Action = keyMirror({
	ALL: null,
});

// init state
let defaultState = {
	user: []
}

// reducer
const reducer = (state = defaultState, action = {}) => {
	const { type, payload } = action;
	switch (type){
		case Action.ALL:
			return Object.assign({}, state,
				{
					user: payload,
				}	
			);
		default:
			return state;
	}
}

// store
let store = createStore(reducer);


// listener
store.subscribe((e) => {
	let state = store.getState();
	console.log(state)
});

// action
let all = () => ({
	type: Action.ALL,
	payload: [4, 5, 6],
});

// dispatch
store.dispatch(all());



class Test extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>test</div>
		);
	}
}

export default Test;