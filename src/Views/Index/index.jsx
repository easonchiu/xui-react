import React, { Component, PropTypes } from 'react'

import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'


class Index extends Component {
	constructor(props) {
		super(props);
		this.footerNavChange = this.footerNavChange.bind(this);
		this.state = {
			channel: 1
		}
	}
	footerNavChange(val) {
		this.state.channel = val;
		this.setState(this.state);
	}
	render() {
		return (
			<div>
				<Header { ...this.state } />
				<div className="app-body">
					{ this.props.children || <Home /> }
				</div>
				<Footer onNavChange={ this.footerNavChange } />
			</div>
		);
	}
}

export default Index;