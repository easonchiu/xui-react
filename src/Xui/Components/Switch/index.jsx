import './style'
import React, { Component } from 'react'
import classnames from 'classnames'

class Switch extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-switch',
			{
				'x-switch--active': this.props.active
			},
			this.props.className,
		);
		return (
			<a className={ css } onClick={ this.props.onClick }>
				<span></span>
				<sub>{ this.props.on }</sub>
				<sup>{ this.props.off }</sup>
			</a>
		);
	}
}

export default Switch