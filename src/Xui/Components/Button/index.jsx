import './style'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = 'x-button';
		css += this.props.type ? ' x-button--' + this.props.type : ' x-button--default';
		if (this.props.mini){
			css += ' x-button--mini';
		}
		if (this.props.disabled){
			css += ' x-button--disabled';
		}
		if (this.props.to && this.props.onClick == undefined){
			return (
				<Link to={ this.props.to } className={ css }>
					{ this.props.children }
				</Link>
			);
		} else if (this.props.onClick) {
			return (
				<a onClick={ this.props.onClick } className={ css }>
					{ this.props.children }
				</a>
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
	to: PropTypes.string,
	onClick: PropTypes.func
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

Button.Group = ButtonGroup;

export default Button;
export { ButtonGroup };