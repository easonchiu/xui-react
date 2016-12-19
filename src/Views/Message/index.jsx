import React, { Component, PropTypes } from 'react'
import ajax from '../../Assets/Js/ajax.js'

import Msg from '../../Components/Message/index.jsx'



class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		ajax.get('./datas/messageList.json').then(res => {
			this.setState({
				list: res.data
			});
			console.log(res)
		}, error => {
			console.log('error', error);
		});
	}
	render() {
		return (
			<div>
			{
				this.state.list.map((e, i) => <Msg { ...e } key={ i } />)
			}
			</div>
		);
	}
}

export default Message;