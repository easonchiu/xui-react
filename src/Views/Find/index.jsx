import './style.scss'
import React, { Component, PropTypes } from 'react'

import CellsGroup from '../../Components/CellsGroup/index.jsx'


class Find extends Component {
	render() {
		let group = [
			[
				{
					title: '朋友圈',
					link: '#'
				}
			],
			[
				{
					title: '扫一扫',
					link: '#'
				},
				{
					title: '摇一摇',
					link: '#'
				}
			],
			[
				{
					title: '漂流瓶',
					link: '#'
				}
			],
			[
				{
					title: '购物',
					link: '#'
				},
				{
					title: '游戏',
					link: '#'
				}
			]
		];
		return (
			<div className="view-find">
				{
					group.map((e, i) => (<CellsGroup group={ e } key={ i } />))
				}
			</div>
		);
	}
}

export default Find;