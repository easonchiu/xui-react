import React, { Component, PropTypes } from 'react'
import style from './style.scss'

class Comp extends Component {
	componentDidMount () {
		console.log('did mount');
	}
	render () {
		const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
		return (
			<div className="row">
				<span>Clicked: { counter } times</span>
				<button onClick={ increment }>increment</button>
				<button onClick={ decrement }>decrement</button>
				<button onClick={ incrementIfOdd }>{'increment if odd'}</button>
				<button onClick={ () => incrementAsync() }>increment async</button>
			</div>
		);
	}
}

Comp.PropTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync: PropTypes.func.isRequired,

	counter: PropTypes.number.isRequired
}

export default Comp;