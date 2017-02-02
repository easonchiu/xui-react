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
						<Cell.Row key={ e } to="/cell#link">
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
						<Cell.Row key={ e } header="标题文字" desc="说明描述" to="/" />
					);
				})
			}
		</Cell>
	)
}

// const CellE = () => {
// 	return (
// 		<div>
// 			<Cell.Title title="带图标的列表" />
// 			<Cell>
// 				{
// 					[1, 2, 3].map(e => {
// 						return (
// 							<Cell.Row key={ e }>
// 								<Cell.Row.Header>
// 									<Icon name="home" />
// 								</Cell.Row.Header>
// 								<Cell.Row.Body>
// 									<h6>标题文字</h6>
// 								</Cell.Row.Body>
// 								<Cell.Row.Footer>
// 									<span>说明描述</span>
// 								</Cell.Row.Footer>
// 							</Cell.Row>
// 						);
// 					})
// 				}
// 			</Cell>
// 		</div>
// 	)
// }


class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkboxid: 1,
			radioid: 1,
			select: ''
		};
	}
	onCheckboxClick(v) {
		if (!this.checked){
			this.setState({
				checkboxid: v
			});
		}
	}
	onRadioClick(v) {
		if (!this.checked){
			this.setState({
				radioid: v
			});
		}
	}
	onSelectChange() {
		let val = findDOMNode(this.refs.select).value;
		this.setState({
			select: val
		});
	}
	render() {

		// let CellG = (
		// 	<div>
		// 		<Cell.Title title="单选框" />
		// 		<Cell>
		// 			{
		// 				[1, 2, 3].map(e => {
		// 					return (
		// 						<Cell.Row key={ e } checkbox checked={ this.state.checkboxid == e } onClick={ this.onCheckboxClick.bind(this, e) }>
		// 							<Cell.Row.Body>
		// 								<h6>标题文字</h6>
		// 							</Cell.Row.Body>
		// 							<Cell.Row.Footer>
		// 								<small>描述</small>
		// 							</Cell.Row.Footer>
		// 						</Cell.Row>
		// 					);
		// 				})
		// 			}
		// 		</Cell>
		// 	</div>
		// )

		// let CellF = (
		// 	<div>
		// 		<Cell.Title title="多选框" />
		// 		<Cell>
		// 			{
		// 				[1, 2, 3].map(e => {
		// 					return (
		// 						<Cell.Row key={ e } radio checked={ this.state.radioid == e } onClick={ this.onRadioClick.bind(this, e) }>
		// 							<Cell.Row.Header>
		// 								<img src="./src/Assets/Images/headpic.jpeg" />
		// 							</Cell.Row.Header>
		// 							<Cell.Row.Body>
		// 								<h6>标题文字</h6>
		// 							</Cell.Row.Body>
		// 							<Cell.Row.Footer>
		// 								<span>说明描述</span>
		// 							</Cell.Row.Footer>
		// 						</Cell.Row>
		// 					);
		// 				})
		// 			}
		// 		</Cell>
		// 	</div>
		// )
		
		// let selectcss = this.state.select == '' ? 'empty-select' : ''
		// let CellH = (
		// 	<div>
		// 		<Cell.Title title="单选框" />
		// 		<Cell>
		// 			<Cell.Row>
		// 				<Cell.Row.Header>
		// 					<label>姓名</label>
		// 				</Cell.Row.Header>
		// 				<Cell.Row.Body>
		// 					<input type="text" placeholder="请输入" />
		// 				</Cell.Row.Body>
		// 				<Cell.Row.Header>
		// 					<label>手机号</label>
		// 				</Cell.Row.Header>
		// 				<Cell.Row.Body>
		// 					<input type="text" placeholder="请输入" />
		// 				</Cell.Row.Body>
		// 			</Cell.Row>
		// 			<Cell.Row>
		// 				<Cell.Row.Header>
		// 					<label>单行文本</label>
		// 				</Cell.Row.Header>
		// 				<Cell.Row.Body>
		// 					<input type="text" placeholder="请输入" />
		// 				</Cell.Row.Body>
		// 			</Cell.Row>
		// 			<Cell.Row vstart>
		// 				<Cell.Row.Header>
		// 					<label>多行文本</label>
		// 				</Cell.Row.Header>
		// 				<Cell.Row.Body>
		// 					<textarea placeholder="请输入"></textarea>
		// 				</Cell.Row.Body>
		// 			</Cell.Row>
		// 			<Cell.Row>
		// 				<Cell.Row.Header>
		// 					<label>下拉菜单</label>
		// 				</Cell.Row.Header>
		// 				<Cell.Row.Body>
		// 					<select className={ selectcss } onChange={ this.onSelectChange.bind(this) } ref="select">
		// 						<option value="">请选择</option>
		// 						<option value="2">下拉菜单A</option>
		// 						<option value="3">下拉菜单B</option>
		// 						<option value="4">下拉菜单C</option>
		// 					</select>
		// 				</Cell.Row.Body>
		// 			</Cell.Row>
		// 		</Cell>
		// 	</div>
		// )
		
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

					<Cell.Title title="简写方式" />
					<Cell>
						<Cell.Row
							header="Header"
							body="Body"
							footer="Footer"
							to="/" />
						<Cell.Row
							header="Header"
							body="Body"
							footer="Footer"
							to="/" />

						<Cell.Row
							header={ <img src="./src/Assets/Images/headpic.jpeg" /> }
							body={ <h6>标题文字</h6> }
							footer={ <h6>描述文字</h6> } />
						<Cell.Row
							header={ <img src="./src/Assets/Images/headpic.jpeg" /> }
							body={ <h6>标题文字</h6> }
							footer={ <h6>描述文字</h6> } />
						<Cell.Row
							header={ <img src="./src/Assets/Images/headpic.jpeg" /> }
							body={ <h6>标题文字</h6> }
							footer={ <h6>描述文字</h6> } />

					</Cell>

				</Layout.Body>
				
			</Layout>
		);
	}
}

export default Message;