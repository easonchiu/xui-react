import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Message extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let link = '/messageDetails/' + this.props.id;
		return (
			<div className="message-item">
				<div className="message-item__head">
					<img src={ this.props.headpic } />
				</div>
				<div className="message-item__content">
					<h2>{ this.props.nickname }</h2>
					<p>{ this.props.message }</p>
				</div>
				<time>{ this.props.date }</time>
				<Link to={ link }></Link>
			</div>
		);
	}
}

export default Message;