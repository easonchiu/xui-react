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
		let css = 'x-app-footer';
		if (this.props.padding) {
			css += ' x-app-footer--padding'
		}
		return (
			<footer className={ css }>
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

		let start = (this.props.start && typeof this.props.start == 'object') ?
					<HeaderStart>{ this.props.start }</HeaderStart> : null;
		
		let end = (this.props.end && typeof this.props.end == 'object') ?
					<HeaderEnd>{ this.props.end }</HeaderEnd> : null;
		return (
			<header className="x-app-header">
				<div className="x-app-header__inner">
					{ title }
					{ this.props.children }
					{ start }
					{ end }
				</div>
			</header>
		);
	}
}

class HeaderStart extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<nav className="x-app-header__start">
				{ this.props.children }
			</nav>
		);
	}
}

class HeaderEnd extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<nav className="x-app-header__end">
				{ this.props.children }
			</nav>
		);
	}
}

Layout.Header = LayoutHeader
Layout.Header.Start = HeaderStart
Layout.Header.End = HeaderEnd
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter
export default Layout