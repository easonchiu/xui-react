import './style'
import React, { Component } from 'react'

class Layout extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<view className="x-app">
				{ this.props.children }
			</view>
		);
	}
}

class LayoutBody extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<main className="x-app-body">
				{ this.props.children }
			</main>
		);
	}
}

class LayoutFooter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<footer className="x-app-footer">
				{ this.props.children }
			</footer>
		);
	}
}

class LayoutHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let title = this.props.title ? <h1>{ this.props.title }</h1> : null;
		return (
			<header className="x-app-header">
				<div className="x-app-header__inner">
					{ title }
					{ this.props.children }
				</div>
			</header>
		);
	}
}

class HeaderTools extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = 'x-app-header__tools--left';
		if (this.props.align == 'right'){
			css = 'x-app-header__tools--right';
		}
		return (
			<nav className={ css }>
				{ this.props.children }
			</nav>
		);
	}
}


Layout.Header = LayoutHeader
Layout.Header.Tools = HeaderTools
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter
export default Layout