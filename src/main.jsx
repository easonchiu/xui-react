import R from './styles/reset.scss'

import React, { createClass, Children, PropTypes } from 'react'
import { render } from 'react-dom'

// import Body from './componets/Body/index.jsx'

let Comp = createClass({
	getInitialState() {
		return {
			value: ''
		}	
	},
	handleChange(e) {
		var v = e.target.value;
		if (parseInt(v) == v || v == ''){
			this.setState({
				value: v
			});
		}
	},
	render() {
		return (
			<div>
				<input type="text" value={ this.state.value } onChange={ this.handleChange } placeholder="tips" />
			</div>
		);
	}
});


render(
	<Comp />,
	document.getElementById('app')
);

// https://github.com/ruanyf/react-demos/tree/v15.0