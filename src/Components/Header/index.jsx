import './style.scss'
import React, { Component, PropTypes } from 'react'

class Header extends Component {
	constructor(props) {
		super(props);
	}
	getTitle(){
		if (this.props.title) {
			return this.props.title;
		}
		return ['微信', '通讯录', '发现', '我'][this.props.channel - 1];
	}
	render() {
		return (
			<div className="app-header">
				<h1>{ this.getTitle() }</h1>
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string,
	channel: PropTypes.number
}

export default Header;