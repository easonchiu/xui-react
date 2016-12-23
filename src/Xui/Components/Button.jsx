import '../Styles/Button.scss'
import React, { Component, PropTypes } from 'react'

class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<a className="x-button__primary">
				button
			</a>
		);
	}
}

export default Button