import './style'
import React, { Component } from 'react'
import classnames from 'classnames'

class Rmb extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-rmb',
			{
				'x-rmb--gray': this.props.gray,
			},
			this.props.className,
		);
		return (
			<h6 className={ css }>{ this.props.price }</h6>
		);
	}
}

export default Rmb;