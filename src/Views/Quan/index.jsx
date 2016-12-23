import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import ajax from '../../Assets/Js/ajax.js'

import HeaderBar, { HeaderBarTools } from '../../Xui/Components/HeaderBar.jsx'
import Body from '../../Xui/Components/Body.jsx'
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
				<HeaderBar title="朋友圈">
					<HeaderBarTools>
						<Link to="/find"><i className="x-icon--back" />返回</Link>
					</HeaderBarTools>
				</HeaderBar>
				<Body>
					<QuanCover />
					{
						this.state.list.map((e, i) => (<QuanItem { ...e } key={ i } />))
					}
				</Body>
			</div>
		);
	}
}

export default Quan;