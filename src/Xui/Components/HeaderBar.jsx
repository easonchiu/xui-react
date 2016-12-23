import '../Styles/HeaderBar.scss'
import '../Styles/Icon.scss'
import React, { Component, PropTypes } from 'react'

class HeaderBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let title = this.props.title ? <h1>{ this.props.title }</h1> : null;
		return (
			<div className="x-app-header-bar">
				<div className="x-app-header-bar__inner">
			    	{ this.props.children }
			    	{ title }
			    </div>
			</div>
		);
	}
}

HeaderBar.propTypes = {
	title: PropTypes.string
}

class HeaderBarTools extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = 'x-app-header-bar__tools--left';
		if (this.props.align == 'right'){
			css = 'x-app-header-bar__tools--right';
		}
		return (
			<div className={ css }>
				{ this.props.children }
			</div>
		);
	}
}

HeaderBarTools.propTypes = {
	children: PropTypes.any.isRequired
}

export default HeaderBar;
export { HeaderBarTools };