import './style.scss'
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Link, IndexLink } from 'react-router'

class Nav extends Component {
	constructor(props) {
		super(props);
		this.handClick = this.handClick.bind(this);
	}
	handClick(e) {
		let ts = findDOMNode(this.refs.nav);
		this.props.onClick(ts.dataset.title);
	}
	render() {
		let Node = Link;
		if (this.props.isIndex){
			Node = IndexLink;
		}
		return (
			<Node
				className="app-footer__nav"
				activeClassName="active"
				data-title={ this.props.name }
				ref="nav"
				to={ this.props.link }
				onClick={ this.handClick }><i></i>{ this.props.name }</Node>
		);
	}
}

Nav.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default Nav