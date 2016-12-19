import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import ajax from '../../Assets/Js/ajax.js'

import Header from '../../Components/Header/index.jsx'
import QuanCover from '../../Components/QuanCover/index.jsx'
import QuanItem from '../../Components/QuanItem/index.jsx'

class Quan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
	}
	componentDidMount() {
		ajax.get('./datas/quanList.json').then(res => {
			this.setState({
				list: res.data
			});
		}, error => {
			console.log('error', error);
		});
	}
	render() {
		return (
			<div>
				<Header title="朋友圈">
					<Link className="back" to="/find">返回</Link>
				</Header>
				<div className="app-body">
					<QuanCover />
					{
						this.state.list.map((e, i) => (<QuanItem { ...e } key={ i } />))
					}
				</div>
			</div>
		);
	}
}

export default Quan;