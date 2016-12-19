import React, { Component, PropTypes } from 'react'

import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'


class Index extends Component {
	constructor(props) {
		super(props);
		this.footerNavChange = this.footerNavChange.bind(this);
		this.setDefaultTitle = this.setDefaultTitle.bind(this);
		this.state = {
			title: ''
		}
	}
	setDefaultTitle(v) {
		this.setState({
			title: v
		});
	}
	footerNavChange(val) {
		this.state.title = val;
		this.setState(this.state);
	}
	render() {
		return (
			<div>
				<Header { ...this.state } />
				<div className="app-body">
					{ this.props.children }
				</div>
				<Footer defaultTitle={ this.setDefaultTitle } onNavChange={ this.footerNavChange } />
			</div>
		);
	}
}

export default Index;