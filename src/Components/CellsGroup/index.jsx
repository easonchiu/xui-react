import './style.scss'
import React, { Component, PropTypes } from 'react'

import Cell from '../Cell/index.jsx'

class CellsGroup extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (
			<div className="cells-group">
				{
					this.props.group.map((e, i) => (<Cell { ...e } key={ i } />))
				}
			</div>
		);
	}
}

CellsGroup.propTypes = {
	group: PropTypes.array.isRequired
}

export default CellsGroup;