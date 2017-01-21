import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import Cell from '../../Xui/Components/Cell'
import Rmb from '../../Xui/Components/Rmb'
import Icon from '../../Xui/Components/Icon'


const CellA = () => {
	return (
		<div>
			<Cell.Title title="带链接的商品列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<Cell.Row key={ e } to="/" vstart>
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
		</div>
	);
}

const CellB = () => {
	return (
		<div>
			<Cell.Title title="带购买信息的商品列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<Cell.Row key={ e }>
								<Cell.Row.Header>
									<img src="./src/Assets/Images/headpic.jpeg" />
								</Cell.Row.Header>
								<Cell.Row.Body>
									<h6>列表的产品名称等</h6>
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
		</div>
	)
}

const CellC = () => {
	return (
		<div>
			<Cell.Title title="带说明的列表" />
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
		</div>
	)
}

const CellD = () => {
	return (
		<div>
			<Cell.Title title="带说明的链接列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<Cell.Row key={ e } to="/">
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
		</div>
	)
}

const CellE = () => {
	return (
		<div>
			<Cell.Title title="带图标的列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<Cell.Row key={ e }>
								<Cell.Row.Header>
									<Icon name="home" />
								</Cell.Row.Header>
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
		</div>
	)
}


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

		let CellG = (
			<div>
				<Cell.Title title="单选框" />
				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<Cell.Row key={ e } checkbox checked={ this.state.checkboxid == e } onClick={ this.onCheckboxClick.bind(this, e) }>
									<Cell.Row.Body>
										<h6>标题文字</h6>
									</Cell.Row.Body>
									<Cell.Row.Footer>
										<small>描述</small>
									</Cell.Row.Footer>
								</Cell.Row>
							);
						})
					}
				</Cell>
			</div>
		)

		let CellF = (
			<div>
				<Cell.Title title="多选框" />
				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<Cell.Row key={ e } radio checked={ this.state.radioid == e } onClick={ this.onRadioClick.bind(this, e) }>
									<Cell.Row.Header>
										<img src="./src/Assets/Images/headpic.jpeg" />
									</Cell.Row.Header>
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
			</div>
		)
		
		let selectcss = this.state.select == '' ? 'empty-select' : ''
		let CellH = (
			<div>
				<Cell.Title title="单选框" />
				<Cell>
					<Cell.Row>
						<Cell.Row.Header>
							<label>姓名</label>
						</Cell.Row.Header>
						<Cell.Row.Body>
							<input type="text" placeholder="请输入" />
						</Cell.Row.Body>
						<Cell.Row.Header>
							<label>手机号</label>
						</Cell.Row.Header>
						<Cell.Row.Body>
							<input type="text" placeholder="请输入" />
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row>
						<Cell.Row.Header>
							<label>单行文本</label>
						</Cell.Row.Header>
						<Cell.Row.Body>
							<input type="text" placeholder="请输入" />
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row vstart>
						<Cell.Row.Header>
							<label>多行文本</label>
						</Cell.Row.Header>
						<Cell.Row.Body>
							<textarea placeholder="请输入"></textarea>
						</Cell.Row.Body>
					</Cell.Row>
					<Cell.Row>
						<Cell.Row.Header>
							<label>下拉菜单</label>
						</Cell.Row.Header>
						<Cell.Row.Body>
							<select className={ selectcss } onChange={ this.onSelectChange.bind(this) } ref="select">
								<option value="">请选择</option>
								<option value="2">下拉菜单A</option>
								<option value="3">下拉菜单B</option>
								<option value="4">下拉菜单C</option>
							</select>
						</Cell.Row.Body>
					</Cell.Row>
				</Cell>
			</div>
		)
		
		return (
			<div>
				{ CellH }
				<CellA />
				<CellB />
				<CellC />
				<CellD />
				<CellE />
				{ CellF }
				{ CellG }
			</div>
		);
	}
}

export default Message;