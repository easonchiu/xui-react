import React, { Component, PropTypes } from 'react'

import Header from '../../Xui/Components/Header'
import Body from '../../Xui/Components/Body'
import Footer from '../../Xui/Components/Footer'
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
					title: '媒体',
					link: '/media',
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
					<Header.Tools align="right">
						<a href="javascript:;"><Icon name="more" /></a>
					</Header.Tools>
				</Header>

				<Body>
					{ this.props.children }
				</Body>

				<Footer>
					<Footer.Nav.Group>
					{
						this.state.nav.map((e, i) => {
							return <Footer.Nav key={ i } onClick={ this.footerNavClick } { ...e } />
						})
					}
					</Footer.Nav.Group>
				</Footer>
			</div>
		);
	}
}

export default Index;