import React, { Component, PropTypes } from 'react'
import Layout from '../../Xui/Components/Layout'
import Cell from '../../Xui/Components/Cell'
import Button from '../../Xui/Components/Button'
import Panel from '../../Xui/Components/Panel'
import Icon from '../../Xui/Components/Icon'


let DemoI = () => {
	return (
		<Cell>
			{
				[1, 2, 3].map(e => {
					return (
						<Cell.Row key={ e }>
							<Cell.Row.Header>
								<img src="./src/Assets/Images/headpic.jpeg" />
							</Cell.Row.Header>
							<Cell.Row.Body>
								<h6>列表的大标题，可以是产品名称等</h6>
								<span>产品的描述性文字</span>
							</Cell.Row.Body>
						</Cell.Row>
					);
				})
			}
		</Cell>
	)
}

let DemoII = () => {
	return (
		<Cell>
			<Cell.Row>
				<Cell.Row.Header>
					<label>姓名</label>
				</Cell.Row.Header>
				<Cell.Row.Body>
					<input type="text" placeholder="请输入" />
				</Cell.Row.Body>
				<Cell.Row.Header>
					<label>性别</label>
				</Cell.Row.Header>
				<Cell.Row.Body>
					<select>
						<option value="1">男</option>
						<option value="2">女</option>
					</select>
				</Cell.Row.Body>
			</Cell.Row>
			<Cell.Row>
				<Cell.Row.Header>
					<label>住址</label>
				</Cell.Row.Header>
				<Cell.Row.Body>
					<input type="text" placeholder="请输入" />
				</Cell.Row.Body>
			</Cell.Row>
			<Cell.Row>
				<Cell.Row.Header>
					<label>注册码</label>
				</Cell.Row.Header>
				<Cell.Row.Body>
					<input type="text" placeholder="请输入" />
				</Cell.Row.Body>
				<Cell.Row.Footer>
					<Button type="primary" mini>验证</Button>
				</Cell.Row.Footer>
			</Cell.Row>
		</Cell>
	)
}

class PanelView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>

				<Layout.Header title="模块">
					<Layout.Header.Tools>
						<a onClick={ this.props.router.goBack }><Icon name="back" />返回</a>
					</Layout.Header.Tools>
				</Layout.Header>

				<Layout.Body>
					<Cell.Title title="模块" />
					<Panel>
						<Panel.Header>
							<h2>模块名称</h2>
							<a>更多<Icon name="right" /></a>
						</Panel.Header>
						<Panel.Body>
							
							<DemoI />

						</Panel.Body>
						<Panel.Footer>
							<span>底部提示文字</span>
						</Panel.Footer>
					</Panel>
					
					<Cell.Title title="录入" />
					<Panel>
						<Panel.Header>
							<h2>模块名称</h2>
						</Panel.Header>
						<Panel.Body>
							
							<DemoII />

						</Panel.Body>
					</Panel>
				</Layout.Body>

			</Layout>
		);
	}
}

export default PanelView;