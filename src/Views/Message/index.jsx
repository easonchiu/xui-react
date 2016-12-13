import React, { Component, PropTypes } from 'react'

import MsgItem from '../../Components/MessageItem/index.jsx'


let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

class Message extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<div>
			{
				arr.map(i => <MsgItem key={ i } />)
			}
			</div>
		);
	}
}

export default Message;