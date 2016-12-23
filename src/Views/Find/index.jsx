import './style.scss'
import React, { Component, PropTypes } from 'react'

import ajax from '../../Assets/Js/ajax.js'


import Cell, { CellRow, CellRowHeader, CellRowBody, CellRowFooter } from '../../Xui/Components/Cell.jsx'

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
				<Cell>
					<CellRow>
						<CellRowHeader>
							<i className="x-icon--user"></i>
							<label>用户名</label>
						</CellRowHeader>
						<CellRowBody>
							<p>eason chiu.<span>中国</span></p>
						</CellRowBody>
						<CellRowFooter>
							<span>注释</span>
						</CellRowFooter>
					</CellRow>
					<CellRow>
						<CellRowHeader>
							<label>输入框</label>
						</CellRowHeader>
						<CellRowBody>
							<input type="text" placeholder="请随便输入点内容" />
						</CellRowBody>
						<CellRowFooter>
							<i className="x-icon--user"></i>
						</CellRowFooter>
					</CellRow>
					<CellRow>
						<CellRowHeader>
							<label>下拉框</label>
						</CellRowHeader>
						<CellRowBody>
							<select>
								<option>下拉内容A</option>
								<option>下拉内容B</option>
								<option>下拉内容C</option>
								<option>下拉内容D</option>
							</select>
						</CellRowBody>
						<CellRowFooter>
							<i className="x-icon--user"></i>
						</CellRowFooter>
					</CellRow>
				</Cell>
				<Cell>
					<CellRow link="/quan">
						<CellRowHeader>
							<i className="x-icon--friend"></i>
						</CellRowHeader>
						<CellRowBody>
							<h6>朋友圈</h6>
						</CellRowBody>
						<CellRowFooter>
							<span>打开朋友圈</span>
						</CellRowFooter>
					</CellRow>
					<CellRow link="/">
						<CellRowHeader>
							<i className="x-icon--scan"></i>
						</CellRowHeader>
						<CellRowBody>
							<h6>扫一扫</h6>
						</CellRowBody>
					</CellRow>
				</Cell>
			</div>
		);
	}
}

export default Find;