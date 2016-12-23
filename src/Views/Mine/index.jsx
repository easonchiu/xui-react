import './style.scss'
import React, { Component, PropTypes } from 'react'
import ajax from '../../Assets/Js/ajax.js'

import Cell, { CellRow, CellRowHeader, CellRowBody, CellRowFooter } from '../../Xui/Components/Cell.jsx'


class Mine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userinfo: {},
			groups: [
				[
					{
						title: '相册',
						link: '#'
					},
					{
						title: '收藏',
						link: '#'
					},
					{
						title: '钱包',
						link: '#'
					},
					{
						title: '卡包',
						link: '#'
					}
				],
				[
					{
						title: '表情',
						link: '#'
					}
				],
				[
					{
						title: '设置',
						link: '#'
					}
				]
			]
		}
	}
	componentDidMount() {
		ajax.get('./datas/userInfo.json').then(res => {
			this.setState({
				userinfo: res.data
			});
		}, error => {
			console.log('error', error);
		});
	}
	render() {
		return (
			<div className="view-mine">
				<Cell className="cell--use-info">
					<img src={ this.state.userinfo.headpic } />
					<div className="cell--use-info__content">
						<h2>{ this.state.userinfo.nickname }</h2>
						<p>微信号：{ this.state.userinfo.wcid }</p>
					</div>
				</Cell>
				{
					this.state.groups.map((e, i) => (
						<Cell key={ i }>
							{
								e.map((e, i) => {
									return (
										<CellRow key={ i }>
											<CellRowHeader>
												<i className="x-icon--scan"></i>
											</CellRowHeader>
											<CellRowBody>
												<h6>{ e.title }</h6>
											</CellRowBody>
										</CellRow>
									);
								})
							}
						</Cell>
					))
				}
			</div>
		);
	}
}


export default Mine;