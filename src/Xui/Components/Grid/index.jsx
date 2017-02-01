import './style'
import React, { Component, PropTypes } from 'react'

class Grid extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = 'x-grid';
		if (this.props.padding) {
			css += ' x-grid--padding';
		}
		if (this.props.border) {
			css += ' x-grid--border';
		}
		return (
			<div className={ css }>
				<div className="clearfix">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

class GridItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let styl = { width: this.props.col * 100 + '%' }
		return (
			<div className="x-grid__item" style={ styl }>
				<div className="x-grid__inner">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

GridItem.propTypes = {
	col: PropTypes.number.isRequired
}


Grid.Item = GridItem;

export default Grid