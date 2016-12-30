import React, { Component, PropTypes } from 'react'
import Cell, { CellTitle, CellRow, CellRowHeader, CellRowBody, CellRowFooter } from '../../Xui/Components/Cell'

class OthersView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<CellTitle title="其他" />
				<Cell>
					<CellRow to="/logis">
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

export default OthersView;