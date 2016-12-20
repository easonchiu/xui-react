import './style.scss'
import React, { Component, PropTypes } from 'react'
import csn from 'classnames'

class Talk extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = csn({
			'talk-box': true,
			'clearfix': true,
			'talk-box--self': this.props.master == 'self'
		});
		return (
			<div className={ css }>
				<div className="talk-box__head">
					<img src="#" />
				</div>
				<div className="talk-box__content">
					<p>{ this.props.content }</p>
				</div>
			</div>
		);
	}
}

export default Talk;