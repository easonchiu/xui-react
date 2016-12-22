import React, { Component, PropTypes } from 'react'

import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import FooterNav from '../../Components/FooterNav/index.jsx'

class Index extends Component {
	constructor(props) {
		super(props);
		this.footerNavClick = this.footerNavClick.bind(this);
		this.state = {
			title: ''
		}
	}
	footerNavClick(val) {
		this.state.title = val;
		this.setState(this.state);
	}
	render() {
		let menu = [
			{
				name: '微信',
				link: '/'
			},
			{
				name: '通讯录',
				link: '/friends'
			},
			{
				name: '发现',
				link: '/find'
			},
			{
				name: '我',
				link: '/mine'
			}
		];
		
		return (
			<div>
				<Header { ...this.state } />
				<div className="app-body">
					{ this.props.children }
				</div>
				<Footer>
					{
						menu.map((e, i) => {
							if (i == 0){
								e.isIndex = true;
							}
							return <FooterNav key={ i } onClick={ this.footerNavClick } { ...e } />
						})
					}
				</Footer>
			</div>
		);
	}
}

export default Index;