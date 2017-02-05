import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import Layout from '../../Xui/Components/Layout'
import Cell from '../../Xui/Components/Cell'
import Rmb from '../../Xui/Components/Rmb'
import Icon from '../../Xui/Components/Icon'


const CellWithGoodsAndLink = () => {
	return (
		<Cell>
			{
				[1, 2, 3].map(e => {
					return (
						<Cell.Row key={ e } to="http://www.baidu.com">
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
	);
}

const CellWithGoodsInfo = () => {
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
							<Cell.Row.Footer>
								<Rmb price="199.00" />
								<small>共2件</small>
							</Cell.Row.Footer>
						</Cell.Row>
					);
				})
			}
		</Cell>
	)
}

const CellWithRules = () => {
	return (
		<Cell>
			{
				[1, 2, 3].map(e => {
					return (
						<Cell.Row key={ e }>
							<Cell.Row.Body>
								<h6>标题文字</h6>
							</Cell.Row.Body>
							<Cell.Row.Footer>
								<span>说明描述</span>
							</Cell.Row.Footer>
						</Cell.Row>
					);
				})
			}
		</Cell>
	)
}

const CellWithLink = () => {
	return (			
		<Cell>
			{
				[1, 2, 3].map(e => {
					return (
						<Cell.Row key={ e } header={ <Icon name="home" /> } body={ <h6>标题文字</h6> } footer="说明描述" to="/" />
					);
				})
			}
		</Cell>
	)
}

const CheckboxCell = () => {
	return (
		<Cell>
			{
				[1, 2, 3].map(e => {
					return (
						<Cell.Row
							key={ e }
							checkbox
							checked={ e == 1 }
							body={ <h6>标题文字</h6> }/>
					);
				})
			}
		</Cell>
	);
}

const RadioCell = () => {
	return (
		<Cell>
			{
				[1, 2, 3].map(e => {
					return (
						<Cell.Row
							key={ e }
							radio
							checked={ e == 1 }
							body={ <h6>标题文字</h6> }/>
					);
				})
			}
		</Cell>
	);
}

const CellWithInput = () => {
	return (
		<Cell>
			<Cell.Row
				header={ <label>单行文本</label> }
				body={ <input type="text" placeholder="请输入" /> } />
			<Cell.Row
				vstart
				header={ <label>多行文本</label> }
				body={ <textarea placeholder="请输入"></textarea> } />
		</Cell>
	);
}

const CellWithSelect = () => {
	return (
		<Cell>
			<Cell.Row
				arrow
				header={ <label>下拉菜单</label> }
				body={
					<select>
						<option value="">请选择</option>
						<option value="2">下拉菜单A</option>
						<option value="3">下拉菜单B</option>
						<option value="4">下拉菜单C</option>
					</select>
				} />
		</Cell>
	);
}

const ShortCell = () => {
	return (
		<Cell>
			<Cell.Row
				header="头部"
				body="主体"
				footer="尾部" />

			<Cell.Row
				header={ <img src="./src/Assets/Images/headpic.jpeg" /> }
				body={ <h6>标题文字</h6> }
				footer={ <span>描述文字</span> } />
		</Cell>
	);
}

class Message extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>
				<Layout.Header
					title="列表"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>

					<Cell.Title title="带链接的商品列表" />
					<CellWithGoodsAndLink />

					<Cell.Title title="带购买信息的商品列表" />
					<CellWithGoodsInfo />

					<Cell.Title title="带说明的列表" />
					<CellWithRules />

					<Cell.Title title="带说明的链接列表" />
					<CellWithLink />

					<Cell.Title title="单选框" />
					<CheckboxCell />

					<Cell.Title title="多选框" />
					<RadioCell />

					<Cell.Title title="文本框" />
					<CellWithInput />

					<Cell.Title title="下拉菜单" />
					<CellWithSelect />

					<Cell.Title title="简写方式" />
					<ShortCell />

				</Layout.Body>
				
			</Layout>
		);
	}
}

export default Message;