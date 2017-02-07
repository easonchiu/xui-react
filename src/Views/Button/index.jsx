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

						<Cell.Row
							body={ <Button>默认按钮（default）</Button> } />

						<Cell.Row
							body={ <Button type="primary">主按钮（primary）</Button> } />
						
						<Cell.Row
							body={ <Button type="vital">决定按钮（vital）</Button> } />

						<Cell.Row
							body={ <Button type="warn">警告按钮（warn）</Button> } />
						
					</Cell>

					<Cell.Title title="其他形式" />
					<Cell>
						<Cell.Row
							body={ <Button type="primary" disabled={ true }>按钮不可用状态</Button> } />

						<Cell.Row
							body={ <Button type="primary" mini>小按钮（一般不会占满宽度使用）</Button> } />

						<Cell.Row
							body={ <Button type="warn"><Icon name="delete" />&nbsp;带图标按钮</Button> } />

						<Cell.Row
							body={
								<Button.Group>
									<Button type="warn" mini>一组按钮</Button>
									<Button type="primary" mini>一组按钮</Button>
									<Button type="vital" mini>一组按钮</Button>
								</Button.Group>
							} />

						<Cell.Row
							body={
								<Button.Group merge>
									<Button type="primary">按钮A</Button>
									<Button>按钮B</Button>
									<Button>按钮C</Button>
								</Button.Group>
							} />

						<Cell.Row
							header={ <label>验证码</label> }
							body={ <input type="tel" placeholder="请输入手机号" /> }
							footer={ <Button type="primary" mini>获取验证码</Button> } />

					</Cell>

				</Layout.Body>

				<Layout.Footer padding>
					<Button.Group>
						<Button>取消订单</Button>
						<Button type="vital" className="payment">立即支付</Button>
					</Button.Group>
				</Layout.Footer>
			</Layout>
		);
	}
}


export default Mine;