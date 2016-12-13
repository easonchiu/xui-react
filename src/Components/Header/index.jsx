import React, { Component, PropTypes } from 'react'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="inner clearfix">
					<h1>React Demo</h1>
					<a href="javascript:;" className="btn">添加问题</a>
				</div>
			</div>
		);
	}
}

export default Header;