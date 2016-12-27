import './style.scss'
import React, { Component, PropTypes } from 'react'

import Cell, { CellRow, CellRowHeader, CellRowBody, CellRowFooter, CellTitle } from '../../Xui/Components/Cell.jsx'
import Button, { ButtonGroup } from '../../Xui/Components/Button.jsx'
import FooterBar from '../../Xui/Components/FooterBar.jsx'

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
						<CellRowBody>
							<ButtonGroup>
								<Button mini>小按钮</Button>
								<Button type="warn" mini>小按钮</Button>
								<Button type="primary" mini>小按钮</Button>
								<Button type="vital" mini>小按钮</Button>
							</ButtonGroup>
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

				<CellTitle title="底菜单按钮" />
				<FooterBar>
					<ButtonGroup>
						<Button type="warn">删除</Button>
					</ButtonGroup>
				</FooterBar>

				<CellTitle title="底菜单按钮组合" />
				<FooterBar>
					<ButtonGroup>
						<Button>取消</Button>
						<Button type="vital">提交</Button>
					</ButtonGroup>
				</FooterBar>

			</div>
		);
	}
}


export default Mine;