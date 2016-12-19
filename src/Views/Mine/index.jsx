import './style.scss'
import React, { Component, PropTypes } from 'react'
import ajax from '../../Assets/Js/ajax.js'

import CellsGroup from '../../Components/CellsGroup/index.jsx'
import Cell from '../../Components/Cell/index.jsx'


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
				<CellsGroup className="use-info">
					<img src={ this.state.userinfo.headpic } />
					<div className="cells-group--use-info__content">
						<h2>{ this.state.userinfo.nickname }</h2>
						<p>微信号：{ this.state.userinfo.wcid }</p>
					</div>
				</CellsGroup>
				{
					this.state.groups.map((e, i) => (
						<CellsGroup key={ i }>
							{
								e.map((e, i) => (
									<Cell { ...e } key={ i } />
								))
							}
						</CellsGroup>
					))
				}
			</div>
		);
	}
}


export default Mine;