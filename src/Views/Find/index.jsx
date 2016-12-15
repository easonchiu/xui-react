import './style.scss'
import React, { Component, PropTypes } from 'react'

import CellsGroup from '../../Components/CellsGroup/index.jsx'
import Cell from '../../Components/Cell/index.jsx'


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
					group.map((e, i) => (
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

export default Find;