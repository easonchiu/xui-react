import './style'
import React, { Component } from 'react'

import classnames from 'classnames'

class Tab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: this.props.active || 1,
		}
	}

	_click(v) {
		this.setState({
			active: v,
		});
	}

	render() {

		let active;
		if ('active' in this.props){
			active = this.props.active;
		} else if ('active' in this.state) {
			active = this.state.active;
		}

		return (
			<div className="view-test">
				<div className="tabs">
					<a onClick={ this._click.bind(this, 1) } className={ active == 1 ? 'active' : '' }>value1</a>
					<a onClick={ this._click.bind(this, 2) } className={ active == 2 ? 'active' : '' }>value2</a>
					<a onClick={ this._click.bind(this, 3) } className={ active == 3 ? 'active' : '' }>value3</a>
				</div>		
			</div>
		);
	}
}

class ViewTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 1,
		};
	}

	_click() {
		this.setState({
			active: 3,
		});
	}

	render() {
		return (
			<div>
			
				<Tab active={ this.state.active } />

				<button onClick={ this._click.bind(this) }>btn</button>

			</div>
		)
	}
}

export default ViewTest