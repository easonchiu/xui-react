import React, { Component } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../Redux/Action'


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

		console.log(111)

		return (
			<div onClick={ this._onClick.bind(this) }>{ data.p.a }</div>
		);
	}
}


// 把状态转换成属性 state => props
const mapStateToProps = state => {
	return {
		...state
	};
}

const mapDispatchToProps = dispatch => ({
	act: bindActionCreators(actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Test);