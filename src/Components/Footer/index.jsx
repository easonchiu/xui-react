import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

class Footer extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(d, e) {
		this.props.onNavChange(d);
	}
	render() {
		return (
			<div className="app-footer">
				<IndexLink
					className="app-footer__nav"
					activeClassName="active"
					onClick={
						e => this.handleClick(1, e)
					}
					to="/">
					<i></i>微信
				</IndexLink>
				<Link
					className="app-footer__nav"
					activeClassName="active"
					onClick={
						e => this.handleClick(2, e)
					}
					to="/friends">
					<i></i>通讯录
				</Link>
				<Link
					className="app-footer__nav"
					activeClassName="active"
					onClick={
						e => this.handleClick(3, e)
					}
					to="/find">
					<i></i>发现
				</Link>
				<Link
					className="app-footer__nav"
					activeClassName="active"
					onClick={
						e => this.handleClick(4, e)
					}
					to="/mine">
					<i></i>我
				</Link>
			</div>
		);
	}
}

Footer.propTypes = {
	onNavChange: PropTypes.func.isRequired
}

export default Footer;