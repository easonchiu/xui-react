import './style.scss'
import React, { Component, PropTypes } from 'react'

import Cell from '../Cell/index.jsx'

class CellsGroup extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = 'cells-group';
		if (this.props.className) {
			css += ' cells-group--' + this.props.className;
		}
		return (
			<div className={ css }>
				{ this.props.children }
			</div>
		);
	}
}

CellsGroup.propTypes = {
	className: PropTypes.string
}

export default CellsGroup;