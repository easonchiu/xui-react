import '../Styles/Panel.scss'
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

export default Panel;