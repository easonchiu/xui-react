import './style.scss'
import React, { Component, PropTypes } from 'react'

import Cell from '../../Xui/Components/Cell'
import Button from '../../Xui/Components/Button'
import Footer from '../../Xui/Components/Footer'

class Mine extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Cell.Title title="按钮" />
				<Cell>
					<Cell.Row>
						<Cell.Row.Body>
							<Button>取消操作（默认）</Button>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row>
						<Cell.Row.Body>
							<Button type="warn">否认操作</Button>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row>
						<Cell.Row.Body>
							<Button type="primary">确认操作</Button>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row>
						<Cell.Row.Body>
							<Button type="vital">关键节点操作</Button>
						</Cell.Row.Body>
					</Cell.Row>
				</Cell>

				<Cell.Title title="其他形式" />
				<Cell>
					<Cell.Row>
						<Cell.Row.Body>
							<Button type="primary" disabled>不可用</Button>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row>
						<Cell.Row.Body>
							<Button type="primary" mini>小按钮</Button>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row>
						<Cell.Row.Body>
							<Button.Group>
								<Button mini>小按钮</Button>
								<Button type="warn" mini>小按钮</Button>
								<Button type="primary" mini>小按钮</Button>
								<Button type="vital" mini>小按钮</Button>
							</Button.Group>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row>
						<Cell.Row.Header>
							<label>验证码</label>
						</Cell.Row.Header>
						<Cell.Row.Body>
							<input type="text" placeholder="请输入验证码" />
						</Cell.Row.Body>
						<Cell.Row.Footer>
							<Button type="primary" mini>验证</Button>
						</Cell.Row.Footer>
					</Cell.Row>
				</Cell>

				<Cell.Title title="底菜单按钮" />
				<Footer>
					<Button.Group>
						<Button type="warn">删除</Button>
					</Button.Group>
				</Footer>

				<Cell.Title title="底菜单按钮组合" />
				<Footer>
					<Button.Group>
						<Button>取消</Button>
						<Button type="vital">提交</Button>
					</Button.Group>
				</Footer>
				
			</div>
		);
	}
}


export default Mine;