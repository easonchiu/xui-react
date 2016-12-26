import '../Styles/Logis.scss'
import React, { Component, PropTypes } from 'react'

class Logis extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="x-logis">
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
		return (
			<article className="x-logis__row">
				<i></i>
				{ this.props.children }
			</article>
		);
	}
}

export default Logis;
export { LogisRow };