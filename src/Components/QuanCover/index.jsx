import './style.scss'
import React, { Component, PropTypes } from 'react'


class QuanCover extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="quan-cover">
				<div className="quan-cover__bg"></div>
				<div className="quan-cover__user">
					<h1>邪恶的罐子</h1>
					<img src="./src/Assets/Images/head.jpg" />
				</div>
				<div className="quan-cover__ft"></div>
			</div>
		);
	}
}

export default QuanCover;