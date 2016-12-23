import '../Styles/Cell.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import classnames from 'classnames'

class Cell extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		let css = classnames('x-cell', this.props.className);
		return (
			<div className={ css }>
				{ this.props.children }
			</div>
		);
	}
}

class CellRow extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		if (this.props.link) {
			return (
				<Link to={ this.props.link } className="x-cell__row">
					{ this.props.children }
				</Link>
			);
		}
		return (
			<div className="x-cell__row">
				{ this.props.children }
			</div>
		);
	}
}

CellRow.propTypes = {
	link: PropTypes.string
}

class CellRowHeader extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="x-cell__row__header">
				{ this.props.children }
			</div>
		);
	}
}

class CellRowBody extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="x-cell__row__body">
				{ this.props.children }
			</div>
		);
	}
}

class CellRowFooter extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="x-cell__row__footer">
				{ this.props.children }
			</div>
		);
	}
}

export default Cell;
export { CellRow, CellRowHeader, CellRowBody, CellRowFooter };