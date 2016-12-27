import React, { Component, PropTypes } from 'react'
import { CellTitle } from '../../Xui/Components/Cell.jsx'

class Panel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<CellTitle title="模块" />
			</div>
		);
	}
}

export default Panel;