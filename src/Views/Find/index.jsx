import './style.scss'
import React, { Component, PropTypes } from 'react'
import ajax from '../../Assets/Js/ajax.js'

import CellsGroup from '../../Components/CellsGroup/index.jsx'
import Cell from '../../Components/Cell/index.jsx'


class Find extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groups: []
		};
	}
	componentDidMount() {
		ajax.get('./datas/findList.json').then(res => {
			this.setState({
				groups: res.data
			});
		}, error => {
			console.log('error', error);
		});
	}
	render() {
		return (
			<div className="view-find">
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

export default Find;