import './style.scss'
import React, { Component, PropTypes } from 'react'



class Group extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="friends-group">
				<h2 className="friends-group__title">{ this.props.tag }</h2>
				{ this.props.children }
			</div>
		);
	}
}

export default Group;