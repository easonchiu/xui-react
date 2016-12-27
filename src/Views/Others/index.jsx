import React, { Component, PropTypes } from 'react'
import Cell, { CellTitle, CellRow, CellRowHeader, CellRowBody, CellRowFooter } from '../../Xui/Components/Cell.jsx'

import ajax from '../../Assets/Js/ajax.js'


class Friends extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<CellTitle title="其他" />
				<Cell>
					<CellRow to="/">
						<CellRowBody>
							<h6>物流信息</h6>
						</CellRowBody>
					</CellRow>
					<CellRow to="/">
						<CellRowBody>
							<h6>用户列表</h6>
						</CellRowBody>
					</CellRow>
				</Cell>
			</div>
		);
	}
}

export default Friends;