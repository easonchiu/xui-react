import R from './styles/reset.scss'

import React, { Children, PropTypes, Component } from 'react'
import { render } from 'react-dom'

// import Body from './componets/Body/index.jsx'

class Comp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	render() {
		return (
			<div>
				<h1>{ this.props.title }</h1>
				<input type="text" value={ this.state.value } onChange={ this.handleChange } />
			</div>
		);
	}
}

Comp.defaultProps = {
	title: 'aaa'
}

Comp.propTypes = {
	title: PropTypes.string.isRequired
}


render(
	<Comp title="标题" />,
	document.getElementById('app')
);

// https://github.com/ruanyf/react-demos/tree/v15.0
// http://www.cnblogs.com/yongjz/p/5356914.html