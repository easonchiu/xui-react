import './style'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let type = this.props.type ? this.props.type : 'default';
		let css = classnames(
			'x-button',
			'x-button--' + type,
			{
				'x-button--mini': this.props.mini,
				'x-button--disabled': this.props.disabled,
			},
			this.props.className,
		);
		
		if (this.props.to && this.props.onClick == undefined){
			return (
				<Link to={ this.props.to } className={ css }>
					{ this.props.children }
				</Link>
			);
		}
		return (
			<a onClick={ this.props.onClick || null } className={ css }>
				{ this.props.children }
			</a>
		);
	}
}

let buttonWithActive = (Button) => {
	return class Comp extends Component {
		render() {
			return (
				<Button>
					asdf
				</Button>
			);
		}
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
		let css = classnames(
			'x-button-group',
			{
				'x-button-group--merge': this.props.merge,
			},
			this.props.className,
		);
		return (
			<menu className={ css }>
				{ this.props.children }
			</menu>
		);
	}
}

Button.Group = ButtonGroup;

export default Button;
export { ButtonGroup };