import './style'

import React, { Component, PropTypes } from 'react'

import Layout from '../../Xui/Components/Layout'
import Cell from '../../Xui/Components/Cell'
import Button from '../../Xui/Components/Button'
import Panel from '../../Xui/Components/Panel'
import Icon from '../../Xui/Components/Icon'
import Grid from '../../Xui/Components/Grid'


let DemoI = () => {
	return (
		<Cell>
			{
				[1, 2, 3].map(e => {
					return (
						<Cell.Row key={ e }>
							<Cell.Row.Header>
								<span className="space"></span>
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

let DemoIII = () => {
	return (
		<Grid border>
			<Grid.Item col={ 1/5 }>grid</Grid.Item>
			<Grid.Item col={ 1/5 }>grid</Grid.Item>
			<Grid.Item col={ 1/5 }>grid</Grid.Item>
			<Grid.Item col={ 1/5 }>grid</Grid.Item>
			<Grid.Item col={ 1/5 }>grid</Grid.Item>
			<Grid.Item col={ 1/4 }>grid</Grid.Item>
			<Grid.Item col={ 1/4 }>grid</Grid.Item>
			<Grid.Item col={ 1/4 }>grid</Grid.Item>
			<Grid.Item col={ 1/4 }>grid</Grid.Item>
			<Grid.Item col={ 1/3 }>grid</Grid.Item>
			<Grid.Item col={ 1/3 }>grid</Grid.Item>
			<Grid.Item col={ 1/3 }>grid</Grid.Item>
		</Grid>
	)
}

class PanelView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>

				<Layout.Header
					title="模块"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>

					<Cell.Title title="模块" />
					<Panel>
						<Panel.Header title="模块名称" />
						<Panel.Body>
							
							<DemoI />

						</Panel.Body>
						<Panel.Footer text="底部提示文字" />
					</Panel>
					
					<Cell.Title title="录入" />
					<Panel>
						<Panel.Header title="模块名称" extra={ <a>更多<Icon name="right" /></a> } />
						<Panel.Body>
							
							<DemoII />

						</Panel.Body>
						<Panel.Footer text="底部提示文字" extra={ <a>更多<Icon name="right" /></a> } />
					</Panel>

					<Cell.Title title="与Grid结合" />
					<Panel>
						<Panel.Header title="模块名称" />
						<Panel.Body>
							
							<DemoIII />

						</Panel.Body>
						<Panel.Footer text="底部提示文字" />
					</Panel>

				</Layout.Body>

			</Layout>
		);
	}
}

export default PanelView;