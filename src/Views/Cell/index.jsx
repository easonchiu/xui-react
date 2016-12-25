import React, { Component, PropTypes } from 'react'

import Cell, { CellTitle, CellRow, CellRowHeader, CellRowBody, CellRowFooter } from '../../Xui/Components/Cell.jsx'
import Rmb from '../../Xui/Components/Rmb.jsx'

class Message extends Component {
	constructor(props) {
		super(props);
	}
	onCheckboxClick(v) {
		console.log(v)
	}
	render() {
		return (
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

				<CellTitle title="多选框" />

				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<CellRow key={ e } radio checked={ e == 1 }>
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

				<CellTitle title="单选框" />

				<Cell>
					{
						[1, 2, 3].map(e => {
							return (
								<CellRow key={ e } checkbox checked={ e == 1 } onClick={ this.onCheckboxClick }>
									<CellRowBody>
										<h6>标题文字</h6>
									</CellRowBody>
								</CellRow>
							);
						})
					}
				</Cell>
			</div>
		);
	}
}

export default Message;