import './style.scss'
import React, { Component, PropTypes } from 'react'

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="app-header">
				<h1>{ this.props.title }</h1>
				{ this.props.children }
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string,
	channel: PropTypes.number
}

export default Header;