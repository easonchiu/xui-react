import R from './styles/reset.scss'

import React, { Children, PropTypes, Component } from 'react'
import { render } from 'react-dom'

// import Body from './componets/Body/index.jsx'

class Comp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'aaa',
			checked: true,
			radio: 'b'
		};

	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	handleChecked(e) {
		this.setState({
			checked: e.target.checked
		});
	}
	handleChecked2(e){
		this.setState({
			radio: e.target.value
		});
	}
	render() {
		return (
			<div>
				<h1>{ this.props.title }</h1>
				<input type="text" value={ this.state.value } onChange={ this.handleChange.bind(this) } />
				<input type="checkbox" value="222" name="r" checked={ this.state.checked } onChange={ this.handleChecked.bind(this) } />
				<input type="radio" value="a" name="r" checked={ this.state.radio == 'a' } onChange={ this.handleChecked2.bind(this) } />
				<input type="radio" value="b" name="r" checked={ this.state.radio == 'b' } onChange={ this.handleChecked2.bind(this) } />
				<input type="radio" value="c" name="r" checked={ this.state.radio == 'c' } onChange={ this.handleChecked2.bind(this) } />
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