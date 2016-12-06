import React, { Component, PropTypes } from 'react'
import style from './style.scss'

export default class Comp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foo: 'bar'
		}
	}
	render () {
		return (
			<div className="compname">
				<a href="javascript:;" onClick={ this.click.bind(this) }>{ this.props.text } { this.state.foo }</a>
			</div>
		);
	}
	click () {
	    console.log(this);
	    this.setState({
	    	foo: 'false'
	    });
	}
}