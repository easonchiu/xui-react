import React, { Component, PropTypes } from 'react'

import Msg from '../../Components/Message/index.jsx'




class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		fetch('./datas/friends.json', {
			method: 'GET'
		}).then(res => {
			if (res.ok) {
				res.json().then(d => {
					console.log(d)
					this.setState({
						
					});
				});
			}
		}, error => {
			console.log(error);
		});
	}
	render() {
		return (
			<div>
			{
				this.state.list.map((e, i) => <Msg key={ i } />)
			}
			</div>
		);
	}
}

export default Message;