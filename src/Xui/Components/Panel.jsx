import '../Styles/Panel'
import React, { Component, PropTypes } from 'react'

class Panel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="x-panel">
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
		return (
			<header className="x-panel__header">
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
		return (
			<div className="x-panel__body">
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
		return (
			<footer className="x-panel__footer">
				{ this.props.children }
			</footer>
		);
	}
}


export default Panel;
export { PanelHeader, PanelBody, PanelFooter };