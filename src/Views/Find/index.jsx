import './style.scss'
import React, { Component, PropTypes } from 'react'

import CellsGroup from '../../Components/CellsGroup/index.jsx'
import Cell from '../../Components/Cell/index.jsx'


class Find extends Component {
	constructor(props) {
		super(props);
		this.state = {
			group: [
				[
					{
						"title": "朋友圈",
						"link": "#"
					}
				],
				[
					{
						"title": "扫一扫",
						"link": "#"
					},
					{
						"title": "摇一摇",
						"link": "#"
					}
				],
				[
					{
						"title": "漂流瓶",
						"link": "#"
					}
				],
				[
					{
						"title": "购物",
						"link": "#"
					},
					{
						"title": "游戏",
						"link": "#"
					}
				]
			]
		};
	}
	render() {
		return (
			<div className="view-find">
				{
					this.state.group.map((e, i) => (
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