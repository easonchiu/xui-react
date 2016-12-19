import './style.scss'
import React, { Component, PropTypes } from 'react'
import csn from 'classnames'


class QuanItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		// 文字
		let text = null
		if (this.props.text) {
			text = <p>{ this.props.text }</p>
		}
		// 相册
		let photos = null
		if (this.props.type == 'photos' && this.props.photos != undefined && this.props.photos.length > 0){
			let name = csn({
				'clearfix': true,
				'quan-item__photos': true,
				'quan-item__photos--only': this.props.photos.length == 1,
				'quan-item__photos--four': this.props.photos.length > 1 && this.props.photos.length <= 4,
				'quan-item__photos--nine': this.props.photos.length > 4,
			})
			photos = (
				<div className={ name }>
					{
						this.props.photos.map((e, i) => {
							if (this.props.photos.length == 1) {
								return <img key={ i } src="./src/Assets/Images/head.jpg" />
							}
							var style = {
								backgroundImage: 'url(' + e + ')'
							}
							return <div key={ i } className="quan-item__photo" style={ style }></div>
						})
					}
				</div>
			)
		}
		// 地点
		let location = null
		if (this.props.location) {
			location = <a className="quan-item__location">{ this.props.location.name }</a>
		}
		return (
			<div className="quan-item">
				<div className="quan-item__head">
					<img src="./src/Assets/Images/head.jpg" />
				</div>
				<div className="quan-item__content">
					<h2>{ this.props.nickname }</h2>
					{ text }
					{ photos }
					{ location }
					<time>{ this.props.date }</time>
				</div>
			</div>
		);
	}
}

export default QuanItem