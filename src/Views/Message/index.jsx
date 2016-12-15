import React, { Component, PropTypes } from 'react'

import Msg from '../../Components/Message/index.jsx'




class Message extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
		return (
			<div>
			{
				arr.map((e, i) => <Msg key={ i } />)
			}
			</div>
		);
	}
}

export default Message;