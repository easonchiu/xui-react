import '../Styles/Body.scss'
import React, { Component } from 'react'
import classnames from 'classnames'

class Body extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames('app-body', this.props.className);
		return (
			<main className={ css }>
				{ this.props.children }
			</main>
		);
	}
}

export default Body;