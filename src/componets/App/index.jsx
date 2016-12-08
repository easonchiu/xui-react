import React, { Component, PropTypes } from 'react'
import style from './style.scss'

import Header from '../Header/index.jsx'
import SendBox from '../SendBox/index.jsx'
import List from '../List/index.jsx'


let list = [
	{
		key: 1,
		c: 11,
		q: 'aaaaa',
		a: 'bbbbb'
	},
	{
		key: 2,
		c: 22,
		q: 'aaaaa2',
		a: 'bbbbb2'
	},
	{
		key: 3,
		c: 33,
		q: 'aaaaa3',
		a: 'bbbbb3'
	},
];

class Body extends Component {
	render () {
		return (
			<div className="body">
				<Header />
				<SendBox />
				<List data={ list } />
			</div>
		);
	}
}


export default Body;