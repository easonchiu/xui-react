import React, { Component, PropTypes } from 'react'

import Cell, { CellTitle, CellRow, CellRowHeader, CellRowBody, CellRowFooter } from '../../Xui/Components/Cell.jsx'
import Rmb from '../../Xui/Components/Rmb.jsx'

import Logis, { LogisRow } from '../../Xui/Components/Logis.jsx'

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkboxid: 1,
			radioid: 1
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
	render() {
		let cell1 = (
			<div>
				<CellTitle title="带链接的商品列表" />
				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<CellRow key={ e } link="/">
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
		)

		let cell2 = (
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

		let cell3 = (
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

		let cell4 = (
			<div>
				<CellTitle title="带说明的链接列表" />
				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<CellRow key={ e } link="/">
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

		let cell5 = (
			<div>
				<CellTitle title="带图标的列表" />
				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<CellRow key={ e }>
									<CellRowHeader>
										<i className="x-icon--home" />
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

		let cell6 = (
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

		let cell7 = (
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
								</CellRow>
							);
						})
					}
				</Cell>
			</div>
		)

		let cell8 = (
			<div>
				<CellTitle title="物流跟踪" />
				<Logis>
					{
						[1, 2, 3].map(e => {
							return (
								<LogisRow key={ e }>
									<p>已离开收寄点，发往上海速递处理中心，南通市</p>
									<time>2016-01-21 11:45:20</time>
								</LogisRow>
							)
						})
					}
				</Logis>
			</div>
		)
		return (
			<div>
				{ cell8 }
				{ cell1 }
				{ cell2 }
				{ cell3 }
				{ cell4 }
				{ cell5 }
				{ cell6 }
				{ cell7 }
			</div>
		);
	}
}

export default Message;