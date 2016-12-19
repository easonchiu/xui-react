import React, { Component, PropTypes } from 'react'
import ajax from '../../Assets/Js/ajax.js'

import FriendsGroup from '../../Components/FriendsGroup/index.jsx'
import Friend from '../../Components/Friend/index.jsx'



class Friends extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groups: []
		};
	}
	componentDidMount() {
		ajax.get('./datas/friendsList.json').then(res => {
			this.setState({
				groups: res.data
			});
		}, error => {
			console.log('error', error);
		});
	}
	render() {
		return (
			<div>
				{
					this.state.groups.map((e, i) => (
						<FriendsGroup tag={ e.tag } key={ i }>
							{
								e.list.map((e, i) => (
									<Friend { ...e } key={ i } />
								))
							}
						</FriendsGroup>
					))
				}
			</div>
		);
	}
}

export default Friends;