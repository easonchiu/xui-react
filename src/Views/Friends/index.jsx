import React, { Component, PropTypes } from 'react'

import FriendsGroup from '../../Components/FriendsGroup/index.jsx'
import Friend from '../../Components/Friend/index.jsx'



class Friends extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let groups = [
			{
				tag: 'A',
				list: [
					{
						uid: 1,
						name: '用户A'
					},
					{
						uid: 2,
						name: '用户B'
					}
				]
			},
			{
				tag: 'B',
				list: [
					{
						uid: 3,
						name: '用户C'
					},
					{
						uid: 4,
						name: '用户D'
					}
				]
			}
		];
		return (
			<div>
				{
					groups.map((e, i) => (
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