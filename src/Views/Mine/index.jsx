import './style.scss'
import React, { Component, PropTypes } from 'react'
import ClassNames from 'classnames'

import CellsGroup from '../../Components/CellsGroup/index.jsx'


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
				<div className="cells-group cells-group--use-info">
					<img src="#" />
					<div className="cells-group--use-info__content">
						<h2>邪恶的罐子</h2>
						<p>微信号：second-design</p>
					</div>
				</div>
				{
					groups.map((e, i) => (<CellsGroup group={ e } key={ i } />))
				}
			</div>
		);
	}
}


export default Mine;