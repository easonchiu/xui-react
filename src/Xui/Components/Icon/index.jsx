import './style'
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let type = this.props.type ? 'x-icon--' + this.props.type : '';
		let css = classnames(
			'x-icon',
			'x-icon--' + this.props.name,
			{
				'x-icon--large': this.props.large,
			},
			type,
			this.props.className
		);
		
		return (
			<i className={ css } />
		);
	}
}

Icon.propTypes = {
	name: PropTypes.string.isRequired
}


export default Icon;