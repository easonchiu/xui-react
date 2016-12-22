import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import ajax from '../../Assets/Js/ajax.js'

import Header from '../../Components/Header/index.jsx'
import Talk from '../../Components/Talk/index.jsx'





class MessageDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: []
		}
	}
	componentWillMount() {
		console.log(this.context)
	}
	componentDidMount() {
		ajax.get('./datas/talkList.json').then(res => {
			this.setState({
				content: res.data
			})
		}, error => {
			console.log('error', error)
		})
	}
	render() {
		let content = []
		this.state.content.map((e, i) => {
			if (e.list && e.list.length > 0) {
				if (e.date) {
					content.push(<date key={ i }>{ e.date }</date>);
				}
				e.list.map((e, j) => {
					content.push(<Talk { ...e } key={ (i + 1) * 10000 + j } />);
				})
			}
		})
		return (
			<div>
				<Header title={ 'uid:' + this.props.params.id }>
					<Link to="/" className="back">返回</Link>
				</Header>
				<div className="app-body app-body--message-details">
					{ content }
				</div>
				<div className="app-footer">
					111
				</div>
			</div>
		);
	}
}



export default MessageDetails