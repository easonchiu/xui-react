import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


class Footer extends Component {
	render() {
		return (
			<div className="appFooter">
				<Link to="/"><i></i>微信</Link>
				<Link to="/friends"><i></i>通讯录</Link>
				<Link to="/find"><i></i>发现</Link>
				<Link to="/mine"><i></i>我</Link>
			</div>
		);
	}
}

export default Footer;