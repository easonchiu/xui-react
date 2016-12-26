import './style.scss'
import React, { Component, PropTypes } from 'react'

import Cell, { CellRow, CellRowHeader, CellRowBody, CellRowFooter, CellTitle } from '../../Xui/Components/Cell.jsx'
import Button from '../../Xui/Components/Button.jsx'

class Mine extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<CellTitle title="按钮" />
				<Cell>
					<CellRow>
						<CellRowBody>
							<Button>取消操作（默认）</Button>
						</CellRowBody>
					</CellRow>
					<CellRow>
						<CellRowBody>
							<Button type="warn">否认操作</Button>
						</CellRowBody>
					</CellRow>
					<CellRow>
						<CellRowBody>
							<Button type="primary">确认操作</Button>
						</CellRowBody>
					</CellRow>
					<CellRow>
						<CellRowBody>
							<Button type="vital">关键节点操作</Button>
						</CellRowBody>
					</CellRow>
				</Cell>

				<CellTitle title="其他形式" />
				<Cell>
					<CellRow>
						<CellRowBody>
							<Button type="primary" disabled>不可用</Button>
						</CellRowBody>
					</CellRow>
					<CellRow>
						<CellRowBody>
							<Button type="primary" mini>小按钮</Button>
						</CellRowBody>
					</CellRow>
					<CellRow>
						<CellRowHeader>
							<label>验证码</label>
						</CellRowHeader>
						<CellRowBody>
							<input type="text" placeholder="请输入验证码" />
						</CellRowBody>
						<CellRowFooter>
							<Button type="primary" mini>验证</Button>
						</CellRowFooter>
					</CellRow>
				</Cell>
			</div>
		);
	}
}


export default Mine;