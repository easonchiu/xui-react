import './style'

import React, { Component, PropTypes } from 'react'

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let title = this.props.title ? <h1>{ this.props.title }</h1> : null;
		return (
			<header className="x-app-header-bar">
				<div className="x-app-header-bar__inner">
					{ title }
			    	{ this.props.children }
			    </div>
			</header>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string
}

class HeaderTools extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = 'x-app-header-bar__tools--left';
		if (this.props.align == 'right'){
			css = 'x-app-header-bar__tools--right';
		}
		return (
			<nav className={ css }>
				{ this.props.children }
			</nav>
		);
	}
}

HeaderTools.propTypes = {
	children: PropTypes.any.isRequired
}

Header.Tools = HeaderTools;

export default Header;
export { HeaderTools };