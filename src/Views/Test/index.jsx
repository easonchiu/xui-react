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
		this.state = {
			bbb: 1,
		};
		this.props.act.r({
			a: 1,
			b: 2
		});
	}
	render() {
		return (
			<div>{ this.props.r.a }</div>
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