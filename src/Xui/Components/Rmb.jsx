import '../Styles/Rmb'
import React, { Component } from 'react'

class Rmb extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = 'x-rmb';
		if (this.props.dark) {
			css += ' x-rmb--dark';
		}
		return (
			<h6 className={ css }>{ this.props.price }</h6>
		);
	}
}

export default Rmb;