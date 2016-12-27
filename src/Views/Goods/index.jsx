import React, { Component, PropTypes } from 'react'
import { CellTitle } from '../../Xui/Components/Cell.jsx'

class Goods extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<CellTitle title="商品" />
			</div>
		);
	}
}

export default Goods;