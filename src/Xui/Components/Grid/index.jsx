import './style'
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Grid extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-grid',
			{
				'x-grid--border': this.props.border,
			},
			this.props.className,
		);
		return (
			<div className={ css }>
				{ this.props.children }
			</div>
		);
	}
}

class GridRow extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let css = classnames(
			'x-grid__row',
			'clearfix',
			this.props.className,
		);
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
	}
	render() {
		let styl = { width: this.props.col * 100 + '%' }
		let css = classnames(
			'x-grid__item',
			this.props.className,
		);
		return (
			<div className={ css } style={ styl }>
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


Grid.Row = GridRow;
Grid.Item = GridItem;

export default Grid