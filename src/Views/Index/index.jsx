import React, { Component, PropTypes } from 'react'

import Footer from '../../Components/Footer/index.jsx'


class Index extends Component {
	render() {
		return (
			<div>
				<div className="appBody">
					{ this.props.children || <Home /> }
				</div>
				<Footer />
			</div>
		);
	}
}

export default Index;