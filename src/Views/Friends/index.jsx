import React, { Component, PropTypes } from 'react'

import FriendsGroup from '../../Components/FriendsGroup/index.jsx'

let arr = ['A', 'B', 'C', 'D', 'E'];

class Friends extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<div>
				{
					arr.map(i => <FriendsGroup g={ i } key={ i } />)
				}
			</div>
		);
	}
}

export default Friends;