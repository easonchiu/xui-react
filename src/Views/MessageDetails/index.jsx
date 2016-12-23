import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import ajax from '../../Assets/Js/ajax.js'

import Header from '../../Components/Header/index.jsx'
import Talk from '../../Components/Talk/index.jsx'


import HeaderBar, { HeaderBarTools } from '../../Xui/Components/HeaderBar.jsx'
import Body from '../../Xui/Components/Body.jsx'
import FooterBar from '../../Xui/Components/FooterBar.jsx'





class MessageDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: []
		}
	}
	componentWillMount() {

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
				<HeaderBar title={ 'uid:' + this.props.params.id }>
					<HeaderBarTools>
						<Link to="/"><i className="x-icon--back" />返回</Link>
					</HeaderBarTools>
				</HeaderBar>
				<Body className="app-body--message-details">
					{ content }
				</Body>
				<FooterBar>
					111
				</FooterBar>
			</div>
		);
	}
}



export default MessageDetails