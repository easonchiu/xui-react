import './style.scss'
import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

class Footer extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(d, e) {
		this.props.onNavChange(d);
	}
	componentDidMount() {
		var cnav = this.refs.footer.querySelector('.active');
		this.props.defaultTitle(cnav.dataset.title);
	}
	render() {
		var menus = [
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
			<div className="app-footer" ref="footer">
				{
					menus.map((d, i) => {
						if (d.link == '/'){
							return (
								<IndexLink
									className="app-footer__nav"
									activeClassName="active"
									key={ i }
									data-title={ d.name }
									onClick={
										e => {
											return this.handleClick(d.name, e);
										}
									}
									to={ d.link }>
									<i></i>{ d.name }
								</IndexLink>
							);
						} else {
							return (
								<Link
									className="app-footer__nav"
									activeClassName="active"
									key={ i }
									data-title={ d.name }
									onClick={
										e => {
											return this.handleClick(d.name, e);
										}
									}
									to={ d.link }>
									<i></i>{ d.name }
								</Link>
							);
						}
					})
				}
			</div>
		);
	}
}

Footer.propTypes = {
	onNavChange: PropTypes.func.isRequired
}

export default Footer;