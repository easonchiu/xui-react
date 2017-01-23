import './style'
import React, { Component, PropTypes } from 'react'

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props)

		let css = 'x-icon x-icon--' + this.props.name;
		css += this.props.type ? ' x-icon--' + this.props.type : '';

		if (this.props.large){
			css += ' x-icon--large';
		}

		return (
			<i className={ css } />
		);
	}
}

Icon.propTypes = {
	name: PropTypes.string.isRequired
}


export default Icon;