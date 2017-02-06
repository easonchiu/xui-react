import './style'
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Logis extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-logis',
			this.props.className,
		);
		return (
			<section className={ css }>
				{ this.props.children }
			</section>
		);
	}
}

class LogisRow extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-logis__row',
			this.props.className,
		);
		return (
			<article className={ css }>
				<i></i>
				{ this.props.children }
			</article>
		);
	}
}

Logis.Row = LogisRow;

export default Logis;
export { LogisRow };