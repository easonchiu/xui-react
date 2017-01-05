import React, { Component, PropTypes } from 'react'
import Cell, { CellTitle, CellRow, CellRowHeader, CellRowBody, CellRowFooter } from '../../Xui/Components/Cell'
import Button from '../../Xui/Components/Button'
import Panel, { PanelHeader, PanelBody, PanelFooter } from '../../Xui/Components/Panel'
import Icon from '../../Xui/Components/Icon'

class PanelView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let cell = (
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<CellRow key={ e }>
								<CellRowHeader>
									<img src="./src/Assets/Images/headpic.jpeg" />
								</CellRowHeader>
								<CellRowBody>
									<h6>列表的大标题，可以是产品名称等</h6>
									<span>产品的描述性文字</span>
								</CellRowBody>
							</CellRow>
						);
					})
				}
			</Cell>
		)

		let cell2 = (
			<Cell>
				<CellRow>
					<CellRowHeader>
						<label>姓名</label>
					</CellRowHeader>
					<CellRowBody>
						<input type="text" placeholder="请输入" />
					</CellRowBody>
					<CellRowHeader>
						<label>性别</label>
					</CellRowHeader>
					<CellRowBody>
						<select>
							<option value="1">男</option>
							<option value="2">女</option>
						</select>
					</CellRowBody>
				</CellRow>
				<CellRow>
					<CellRowHeader>
						<label>住址</label>
					</CellRowHeader>
					<CellRowBody>
						<input type="text" placeholder="请输入" />
					</CellRowBody>
				</CellRow>
				<CellRow>
					<CellRowHeader>
						<label>注册码</label>
					</CellRowHeader>
					<CellRowBody>
						<input type="text" placeholder="请输入" />
					</CellRowBody>
					<CellRowFooter>
						<Button type="primary" mini>验证</Button>
					</CellRowFooter>
				</CellRow>
			</Cell>
		)

		return (
			<div>
				<CellTitle title="模块" />
				<Panel>
					<PanelHeader>
						<h2>模块名称</h2>
						<a>更多<Icon name="right" /></a>
					</PanelHeader>
					<PanelBody>
						
						{ cell }

					</PanelBody>
					<PanelFooter>
						<span>底部提示文字</span>
					</PanelFooter>
				</Panel>
				
				<CellTitle title="录入" />
				<Panel>
					<PanelHeader>
						<h2>模块名称</h2>
					</PanelHeader>
					<PanelBody>
						
						{ cell2 }

					</PanelBody>
				</Panel>
				
			</div>
		);
	}
}

export default PanelView;