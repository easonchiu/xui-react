import './style'
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Panel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-panel',
			this.props.className,
		);
		return (
			<section className={ css }>
				{ this.props.children }
			</section>
		);
	}
}

class PanelHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-panel__header',
			this.props.className,
		);
		return (
			<header className={ css }>
				{
					this.props.title ? <h2>{ this.props.title }</h2> : null
				}
				{
					this.props.extra ? <div className="x-panel__extra">{ this.props.extra }</div> : null
				}
				{ this.props.children }
			</header>
		);
	}
}

class PanelBody extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-panel__body',
			this.props.className,
		);
		return (
			<div className={ css }>
				{ this.props.children }
			</div>
		);
	}
}

class PanelFooter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-panel__footer',
			this.props.className,
		);
		return (
			<footer className={ css }>
				{
					this.props.text ? <span>{ this.props.text }</span> : null
				}
				{
					this.props.extra ? <div className="x-panel__extra">{ this.props.extra }</div> : null
				}
				{ this.props.children }
			</footer>
		);
	}
}

Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;

export default Panel;
export { PanelHeader, PanelBody, PanelFooter };