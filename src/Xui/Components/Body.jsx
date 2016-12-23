import '../Styles/Body.scss'
import React, { Component } from 'react'
import classnames from 'classnames'

class Body extends Component {
	constructor(props) {
		super(props);
		console.log()
	}
	render() {
		let css = classnames('app-body', this.props.className);
		return (
			<div className={ css }>
				{ this.props.children }
			</div>
		);
	}
}

export default Body;