import React, { Component, PropTypes } from 'react'

import Header, { HeaderTools } from '../../Xui/Components/Header'
import Body from '../../Xui/Components/Body'
import Footer, { FooterNavGroup, FooterNav } from '../../Xui/Components/Footer'
import Icon from '../../Xui/Components/Icon'


class Index extends Component {
	constructor(props) {
		super(props);
		this.footerNavClick = this.footerNavClick.bind(this);
		this.state = {
			title: '',
			nav: [
				{
					title: '列表',
					link: '/',
					icon: 'home'
				},
				{
					title: '模块',
					link: '/panel',
					icon: 'friend'
				},
				{
					title: '商品',
					link: '/goods',
					icon: 'mail'
				},
				{
					title: '按钮',
					link: '/button',
					icon: 'user'
				},
				{
					title: '其他',
					link: '/others',
					icon: 'more'
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
				<Header title={ this.state.title }>
					<HeaderTools align="right">
						<a href="javascript:;"><Icon name="more" /></a>
					</HeaderTools>
				</Header>

				<Body>
					{ this.props.children && null }
				</Body>

				<Footer>
					<FooterNavGroup>
					{
						this.state.nav.map((e, i) => {
							return <FooterNav key={ i } onClick={ this.footerNavClick } { ...e } /> && null
						})
					}
					</FooterNavGroup>
				</Footer>
			</div>
		);
	}
}

export default Index;