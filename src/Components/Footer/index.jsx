import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import cns from 'classnames'

class Footer extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			active: 1
		};
	}
	handleClick(d, e) {
		this.props.onNavChange(d);
		this.setState({
			active: d
		});
	}
	render() {
		return (
			<div className="app-footer">
				<Link
					className={
						cns('app-footer__nav', {
							'active': this.state.active == 1
						})
					}
					onClick={
						e => this.handleClick(1, e)
					}
					to="/">
					<i></i>微信
				</Link>
				<Link
					className={
						cns('app-footer__nav', {
							'active': this.state.active == 2
						})
					}
					onClick={
						e => this.handleClick(2, e)
					}
					to="/friends">
					<i></i>通讯录
				</Link>
				<Link
					className={
						cns('app-footer__nav', { 'active': this.state.active == 3 })
					}
					onClick={
						e => this.handleClick(3, e)
					}
					to="/find">
					<i></i>发现
				</Link>
				<Link
					className={
						cns('app-footer__nav', { 'active': this.state.active == 4 })
					}
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