import '../Styles/FooterBar.scss'
import '../Styles/Icon.scss'

import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Link, IndexLink } from 'react-router'

class FooterBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="x-app-footer-bar">
				{ this.props.children }
			</div>
		);
	}
}

class FooterBarNavGroup extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="x-app-footer-bar__nav-group">
				{ this.props.children }
			</div>
		);
	}
}

class FooterBarNav extends Component {
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
		let iconName = this.props.icon ? 'x-icon--' + this.props.icon : null;
		let icon = iconName ? <i className={ iconName }></i> : null;
		let Node = this.props.link == '/' ? IndexLink : Link;
		return (
			<Node
				to={ this.props.link }
				activeClassName="active"
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

FooterBarNav.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	onClick: PropTypes.func
}

export default FooterBar;
export { FooterBarNavGroup, FooterBarNav };