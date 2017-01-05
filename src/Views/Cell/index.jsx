import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import Cell, { CellTitle, CellRow, CellRowHeader, CellRowBody, CellRowFooter } from '../../Xui/Components/Cell'
import Rmb from '../../Xui/Components/Rmb'
import Icon from '../../Xui/Components/Icon'


const CellA = () => {
	return (
		<div>
			<CellTitle title="带链接的商品列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<CellRow key={ e } to="/" vstart>
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
		</div>
	);
}

const CellB = () => {
	return (
		<div>
			<CellTitle title="带购买信息的商品列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<CellRow key={ e }>
								<CellRowHeader>
									<img src="./src/Assets/Images/headpic.jpeg" />
								</CellRowHeader>
								<CellRowBody>
									<h6>列表的产品名称等</h6>
									<span>产品的描述性文字</span>
								</CellRowBody>
								<CellRowFooter>
									<Rmb price="199.00" />
									<small>共2件</small>
								</CellRowFooter>
							</CellRow>
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
			<CellTitle title="带说明的列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<CellRow key={ e }>
								<CellRowBody>
									<h6>标题文字</h6>
								</CellRowBody>
								<CellRowFooter>
									<span>说明描述</span>
								</CellRowFooter>
							</CellRow>
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
			<CellTitle title="带说明的链接列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<CellRow key={ e } to="/">
								<CellRowBody>
									<h6>标题文字</h6>
								</CellRowBody>
								<CellRowFooter>
									<span>说明描述</span>
								</CellRowFooter>
							</CellRow>
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
			<CellTitle title="带图标的列表" />
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<CellRow key={ e }>
								<CellRowHeader>
									<Icon name="home" />
								</CellRowHeader>
								<CellRowBody>
									<h6>标题文字</h6>
								</CellRowBody>
								<CellRowFooter>
									<span>说明描述</span>
								</CellRowFooter>
							</CellRow>
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
				<CellTitle title="单选框" />
				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<CellRow key={ e } checkbox checked={ this.state.checkboxid == e } onClick={ this.onCheckboxClick.bind(this, e) }>
									<CellRowBody>
										<h6>标题文字</h6>
									</CellRowBody>
									<CellRowFooter>
										<small>描述</small>
									</CellRowFooter>
								</CellRow>
							);
						})
					}
				</Cell>
			</div>
		)

		let CellF = (
			<div>
				<CellTitle title="多选框" />
				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<CellRow key={ e } radio checked={ this.state.radioid == e } onClick={ this.onRadioClick.bind(this, e) }>
									<CellRowHeader>
										<img src="./src/Assets/Images/headpic.jpeg" />
									</CellRowHeader>
									<CellRowBody>
										<h6>标题文字</h6>
									</CellRowBody>
									<CellRowFooter>
										<span>说明描述</span>
									</CellRowFooter>
								</CellRow>
							);
						})
					}
				</Cell>
			</div>
		)
		
		let selectcss = this.state.select == '' ? 'empty-select' : ''
		let CellH = (
			<div>
				<CellTitle title="单选框" />
				<Cell>
					<CellRow>
						<CellRowHeader>
							<label>姓名</label>
						</CellRowHeader>
						<CellRowBody>
							<input type="text" placeholder="请输入" />
						</CellRowBody>
						<CellRowHeader>
							<label>手机号</label>
						</CellRowHeader>
						<CellRowBody>
							<input type="text" placeholder="请输入" />
						</CellRowBody>
					</CellRow>
					<CellRow>
						<CellRowHeader>
							<label>单行文本</label>
						</CellRowHeader>
						<CellRowBody>
							<input type="text" placeholder="请输入" />
						</CellRowBody>
					</CellRow>
					<CellRow vstart>
						<CellRowHeader>
							<label>多行文本</label>
						</CellRowHeader>
						<CellRowBody>
							<textarea placeholder="请输入"></textarea>
						</CellRowBody>
					</CellRow>
					<CellRow>
						<CellRowHeader>
							<label>下拉菜单</label>
						</CellRowHeader>
						<CellRowBody>
							<select className={ selectcss } onChange={ this.onSelectChange.bind(this) } ref="select">
								<option value="">请选择</option>
								<option value="2">下拉菜单A</option>
								<option value="3">下拉菜单B</option>
								<option value="4">下拉菜单C</option>
							</select>
						</CellRowBody>
					</CellRow>
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