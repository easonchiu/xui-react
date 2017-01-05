import './style'

import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Link, IndexLink } from 'react-router'
import Icon from '../Icon'

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<footer className="x-app-footer-bar">
				{ this.props.children }
			</footer>
		);
	}
}

class FooterNavGroup extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<nav className="x-app-footer-bar__nav-group">
				{ this.props.children }
			</nav>
		);
	}
}

class FooterNav extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(e) {
		var el = findDOMNode(this.refs.nav);
		if (this.props.onClick){
			this.props.onClick(el);
		}
	}
	render() {
		let icon = this.props.icon ? <Icon name={ this.props.icon } /> : null;
		let Node = this.props.link == '/' ? IndexLink : Link;
		return (
			<Node
				to={ this.props.link }
				activeClassName="x-app-footer-bar__nav--active"
				data-title={ this.props.title }
				ref="nav"
				onClick={ this.onClick }
				className="x-app-footer-bar__nav">
				{ icon }
				<p>{ this.props.title }</p>
			</Node>
		);
	}
}

FooterNav.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	onClick: PropTypes.func
}

export default Footer;
export { FooterNavGroup, FooterNav };