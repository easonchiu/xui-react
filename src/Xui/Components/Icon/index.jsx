import './style'
import React, { Component, PropTypes } from 'react'

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<i className={ 'x-icon--' + this.props.name } />
		);
	}
}

Icon.propTypes = {
	name: PropTypes.string.isRequired
}


export default Icon;