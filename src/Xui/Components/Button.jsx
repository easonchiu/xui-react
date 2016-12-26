import '../Styles/Button.scss'
import React, { Component, PropTypes } from 'react'

class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = this.props.type ? 'x-button__' + this.props.type : 'x-button__default';
		if (this.props.mini){
			css += ' x-button--mini';
		}
		if (this.props.disabled){
			css += ' x-button--disabled';
		}
		return (
			<a className={ css }>
				{ this.props.children }
			</a>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string
}

export default Button