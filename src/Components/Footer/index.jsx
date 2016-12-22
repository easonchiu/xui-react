import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="app-footer">
				{ this.props.children }
			</div>
		);
	}
}

export default Footer;