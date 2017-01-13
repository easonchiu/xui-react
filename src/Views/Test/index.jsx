import React, { Component } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import connect from '../../Redux/ConnectProps'


class Test extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		this.props.actions.setData({
			a: 1
		});
	}

	_onClick() {
		let a = this.props.test.a + 1;
		this.props.actions.setData({
			a: a
		});
	}

	render() {
		return (
			<div onClick={ this._onClick.bind(this) }>{ this.props.test.a }</div>
		);
	}
}


export default connect(Test);