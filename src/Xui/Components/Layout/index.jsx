import './style'
import React, { Component } from 'react'
import classnames from 'classnames'

class Layout extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-app',
			this.props.className,
		);
		return (
			<view className={ css }>
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
		let css = classnames(
			'x-app-body',
			this.props.className,
		);
		return (
			<main className={ css }>
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
		let css = classnames(
			'x-app-footer',
			{
				'x-app-footer--padding': this.props.padding,
			},
			this.props.className,
		);
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
		let title = this.props.title && <h1>{ this.props.title }</h1>;

		let start = (this.props.start && typeof this.props.start == 'object') &&
					<HeaderStart>{ this.props.start }</HeaderStart>;
		
		let end = (this.props.end && typeof this.props.end == 'object') &&
					<HeaderEnd>{ this.props.end }</HeaderEnd>;

		let css = classnames(
			'x-app-header',
			this.props.className,
		);
		return (
			<header className={ css }>
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
		let css = classnames(
			'x-app-header__start',
			this.props.className,
		);
		return (
			<nav className={ css }>
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
		let css = classnames(
			'x-app-header__end',
			this.props.className,
		);
		return (
			<nav className={ css }>
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