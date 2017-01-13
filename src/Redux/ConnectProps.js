import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './Action'

// 把状态转换成属性 state => props
const mapStateToProps = state => {
	return {
		...state
	};
}

const mapDispatchToProps = dispatch => {
	return {
		act: bindActionCreators(actions, dispatch)
	}
}

export default component => {
	return connect(
		mapStateToProps,
		mapDispatchToProps,
	)(component)
};