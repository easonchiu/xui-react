import './style'
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
			<section className={ css }>
				{ this.props.children }
			</section>
		);
	}
}

class CellRow extends Component {
	constructor(props) {
		super(props);
	}
	clickHandle(e) {
		this.props.onClick(e);
	}
	render(){
		var others = {};
		if (this.props.onClick){
			others.onClick = this.clickHandle.bind(this);
		}
		if (this.props.to && !this.props.radio) {
			let css = classnames('x-cell__row', {
				'x-cell__row--vstart': this.props.vstart
			});
			return (
				<Link to={ this.props.to } className={ css } { ...others }>
					{ this.props.children }
				</Link>
			);
		}
		let css = classnames('x-cell__row', {
			'x-cell__row--radio': this.props.radio,
			'x-cell__row--radio-checked': this.props.radio && this.props.checked,
			'x-cell__row--checkbox': this.props.checkbox,
			'x-cell__row--checkbox-checked': this.props.checkbox && this.props.checked,
			'x-cell__row--vstart': this.props.vstart,
			'x-cell__row--arrow': this.props.arrow
		});
		return (
			<article className={ css } { ...others }>
				{ this.props.children }
			</article>
		);
	}
}

CellRow.propTypes = {
	to: PropTypes.string,
	onClick: PropTypes.func
}

class CellRowHeader extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<header className="x-cell__row__header">
				{ this.props.children }
			</header>
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
			<footer className="x-cell__row__footer">
				{ this.props.children }
			</footer>
		);
	}
}

class CellTitle extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h2 className="x-cell__title">
				{ this.props.title }
			</h2>
		);
	}
}


Cell.Row = CellRow;
Cell.Row.Header = CellRowHeader;
Cell.Row.Body = CellRowBody;
Cell.Row.Footer = CellRowFooter;
Cell.Title = CellTitle;


export default Cell;
export { CellRow, CellRowHeader, CellRowBody, CellRowFooter, CellTitle };