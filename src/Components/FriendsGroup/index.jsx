import './style.scss'
import React, { Component, PropTypes } from 'react'

import Item from '../FriendItem/index.jsx'

class Group extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="friends-group">
				<h2 className="friends-group__title">{ this.props.g }</h2>
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
		);
	}
}

export default Group;