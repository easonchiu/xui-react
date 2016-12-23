import React, { Component, PropTypes } from 'react'


import HeaderBar, { HeaderBarTools } from '../../Xui/Components/HeaderBar.jsx'
import Body from '../../Xui/Components/Body.jsx'
import FooterBar, { FooterBarNavGroup, FooterBarNav } from '../../Xui/Components/FooterBar.jsx'



class Index extends Component {
	constructor(props) {
		super(props);
		this.footerNavClick = this.footerNavClick.bind(this);
		this.state = {
			title: '',
			nav: [
				{
					title: '微信',
					link: '/',
					icon: 'mobile'
				},
				{
					title: '通讯录',
					link: '/friends',
					icon: 'friend'
				},
				{
					title: '发现',
					link: '/find',
					icon: 'mail'
				},
				{
					title: '我',
					link: '/mine',
					icon: 'user'
				}
			]
		}
	}
	footerNavClick(e) {
		this.state.title = e.dataset.title;
		this.setState(this.state);
	}
	componentWillMount() {
		this.state.nav.map(e => {
			if (e.link == this.props.location.pathname){
				this.setState({
					title: e.title
				});
			}
		});
	}
	render() {
		return (
			<div>
				<HeaderBar title={ this.state.title }>
					<HeaderBarTools>
						<a href="javascript:;"><i className="x-icon--user" /></a>
					</HeaderBarTools>
					<HeaderBarTools align="right">
						<a href="javascript:;"><i className="x-icon--more" /></a>
					</HeaderBarTools>
				</HeaderBar>

				<Body>
					{ this.props.children }
				</Body>

				<FooterBar>
					<FooterBarNavGroup>
					{
						this.state.nav.map((e, i) => {
							return <FooterBarNav key={ i } onClick={ this.footerNavClick } { ...e } />
						})
					}
					</FooterBarNavGroup>
				</FooterBar>

			</div>
		);
	}
}

export default Index;