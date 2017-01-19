import React, { Component, PropTypes } from 'react'


class Media extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="x-media">
				{ this.props.children }
			</div>
		);
	}
}

class MediaBody extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="x-media__body">
				123
			</div>
		);
	}
}

Media.Body = MediaBody
export default Media