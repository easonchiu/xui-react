import './style.scss'
import React, { Component, PropTypes } from 'react'

class Item extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<div className="friendItem">
				<div className="head"></div>
				<div className="content">
					<h2>用户名</h2>
				</div>
			</div>
		);
	}
}

export default Item;