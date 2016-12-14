import './style.scss'
import React, { Component, PropTypes } from 'react'

class Cell extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="cell-item">
				<i></i>
				<h6>{ this.props.title }</h6>
			</div>
		);
	}
}

export default Cell;