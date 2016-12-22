import React, { Component, PropTypes } from 'react'

import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import FooterNav from '../../Components/FooterNav/index.jsx'

class Index extends Component {
	constructor(props) {
		super(props);
		this.footerNavClick = this.footerNavClick.bind(this);
		this.state = {
			title: '',
			menu: [
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
			]
		}
	}
	footerNavClick(val) {
		this.state.title = val;
		this.setState(this.state);
	}
	componentWillMount() {
		this.state.menu.map(e => {
			if (e.link == this.props.location.pathname){
				this.setState({
					title: e.name
				});
			}
		});
	}
	render() {
		return (
			<div>
				<Header { ...this.state } />
				<div className="app-body">
					{ this.props.children }
				</div>
				<Footer>
					{
						this.state.menu.map((e, i) => {
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