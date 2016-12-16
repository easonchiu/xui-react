import './style.scss'
import React, { Component, PropTypes } from 'react'

class QuanItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="quan-item">
				<div className="quan-item__head">
					<img src="./src/Assets/Images/head.jpg" />
				</div>
				<div className="quan-item__content">
					<h2>邪恶的罐子</h2>
					<p>adfasdfasd</p>
					<div className="quan-item__photos--only">
						<img src="./src/Assets/Images/head.jpg" />
					</div>
					<a className="quan-item__location">上海</a>
					<time>2小时前</time>
				</div>
			</div>
		);
	}
}

export default QuanItem;