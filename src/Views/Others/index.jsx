import React, { Component, PropTypes } from 'react'
import Cell from '../../Xui/Components/Cell'



class OthersView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Cell.Title title="其他" />
				<Cell>
					<Cell.Row to="/logis">
						<Cell.Row.Body>
							<h6>物流信息</h6>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row to="/icons">
						<Cell.Row.Body>
							<h6>图标</h6>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row to="/">
						<Cell.Row.Body>
							<h6>用户列表</h6>
						</Cell.Row.Body>
					</Cell.Row>
				</Cell>
			</div>
		);
	}
}

export default OthersView;