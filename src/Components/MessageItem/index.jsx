import './style.scss'
import React, { Component, PropTypes } from 'react'

class Item extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<div className="messageItem">
				<div className="head"></div>
				<div className="content">
					<h2>那谁那谁谁谁</h2>
					<p>我说啥了？</p>
				</div>
				<time>昨天</time>
			</div>
		);
	}
}

export default Item;