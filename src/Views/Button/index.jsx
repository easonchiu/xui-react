import './style.scss'
import React, { Component, PropTypes } from 'react'

import Layout from '../../Xui/Components/Layout'
import Cell from '../../Xui/Components/Cell'
import Button from '../../Xui/Components/Button'
import Icon from '../../Xui/Components/Icon'

class Mine extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>
				<Layout.Header
					title="按钮"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>

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
								<input type="tel" placeholder="请输入手机号" />
							</Cell.Row.Body>
							<Cell.Row.Footer>
								<Button type="primary" mini>获取验证码</Button>
							</Cell.Row.Footer>
						</Cell.Row>
					</Cell>

				</Layout.Body>


				<Layout.Footer padding>
					<Button.Group>
						<Button>取消</Button>
						<Button type="vital">支付</Button>
					</Button.Group>
				</Layout.Footer>
			</Layout>
		);
	}
}


export default Mine;