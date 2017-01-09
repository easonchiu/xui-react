import React, { Component } from 'react'

import { testReducer } from '../../Redux/Reducer'
import { actions, testAction, otherAction } from '../../Redux/Action'
import store from '../../Redux/Store'

store.subscribe((e) => {
	let state = store.getState();
	console.log(state)
});





class Test extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>testb</div>
		);
	}
}

export default Test;