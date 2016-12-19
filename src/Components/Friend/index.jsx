import './style.scss'
import React, { Component, PropTypes } from 'react'

class Item extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="friend-item">
				<div className="friend-item__head">
					<img src={ this.props.headpic } />
				</div>
				<div className="friend-item__content">
					<h2>{ this.props.nickname }</h2>
				</div>
			</div>
		);
	}
}

export default Item;