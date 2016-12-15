import './style.scss'
import React, { Component, PropTypes } from 'react'
import ClassNames from 'classnames'

import CellsGroup from '../../Components/CellsGroup/index.jsx'
import Cell from '../../Components/Cell/index.jsx'


class Mine extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let groups = [
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
		];
		return (
			<div className="view-mine">
				<CellsGroup className="use-info">
					<img src="#" />
					<div className="cells-group--use-info__content">
						<h2>邪恶的罐子</h2>
						<p>微信号：second-design</p>
					</div>
				</CellsGroup>
				{
					groups.map((e, i) => (
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