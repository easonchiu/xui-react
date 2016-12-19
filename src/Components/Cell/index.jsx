import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Cell extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.link && this.props.link != '#'){
			return (
				<Link to={ this.props.link } className="cell-item cell-item--link">
					<i></i>
					<h6>{ this.props.title }</h6>
				</Link>
			);
		}
		return (
			<div className="cell-item">
				<i></i>
				<h6>{ this.props.title }</h6>
			</div>
		);
	}
}

export default Cell;