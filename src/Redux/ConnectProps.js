import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


export default (component, actions) => {

	const mapStateToProps = state => {
		return {
			...state
		};
	}

	const mapDispatchToProps = dispatch => {
		return {
			actions: bindActionCreators(actions, dispatch)
		}
	}

	return connect(
		mapStateToProps,
		mapDispatchToProps,
	)(component);
	
};