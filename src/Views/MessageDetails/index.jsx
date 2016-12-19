import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Header from '../../Components/Header/index.jsx'
import Talk from '../../Components/Talk/index.jsx'

class MessageDetails extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header title="messageDetails">
					<Link to="/" className="back">返回</Link>
				</Header>
				<div className="app-body">
					<Talk />
				</div>
				<div className="app-footer">
					111
				</div>
			</div>
		);
	}
}

export default MessageDetails;