import '../Styles/Button.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

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
		if (this.props.to){
			return (
				<Link to={ this.props.to } className={ css }>
					{ this.props.children }
				</Link>
			);
		}
		return (
			<a className={ css }>
				{ this.props.children }
			</a>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string,
	to: PropTypes.string
}

class ButtonGroup extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<menu className="x-button-group">
				{ this.props.children }
			</menu>
		);
	}
}

export default Button;
export { ButtonGroup };