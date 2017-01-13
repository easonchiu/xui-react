import React, { Component } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import connect from '../../Redux/ConnectProps'


class Test extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		
		this.props.act.setData({
			a: 1
		});

	}

	_onClick() {
		let a = this.props.data.p.a + 1;

		this.props.act.setData({
			a: a
		});

		console.log(11)
	}

	render() {
		let { data } = this.props;
		console.log(data)
		return (
			<div onClick={ this._onClick.bind(this) }>{ 1 }</div>
		);
	}
}


export default connect(Test);