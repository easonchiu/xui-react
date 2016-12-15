import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Item extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<div className="message-item">
				<div className="message-item__head"></div>
				<div className="message-item__content">
					<h2>那谁那谁谁谁</h2>
					<p>我说啥了？</p>
				</div>
				<time>昨天</time>
				<Link to="/messageDetails"></Link>
			</div>
		);
	}
}

export default Item;