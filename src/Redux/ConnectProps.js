import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './Action'


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