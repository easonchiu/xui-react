import './style'
import React, { Component } from 'react'

class Grid extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = 'x-grid';

		if (this.props.column == 2 || this.props.column == 3){
			css += ' x-grid--column-' + this.props.column;
		}

		return (
			<div className={ css }>
				{ this.props.children }
			</div>
		);
	}
}

class GridItem extends Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	render() {
		return (
			<div className="x-grid__item">
				{ this.props.children }
			</div>
		);
	}
}

Grid.Item = GridItem;

export default Grid