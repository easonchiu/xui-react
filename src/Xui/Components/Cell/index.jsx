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

	_click(e) {
		this.props.onClick(e);
	}

	render() {

		// props
		let props = {};

		// 样式名
		let css = classnames('x-cell__row', {
			'x-cell__row--vstart': this.props.vstart,
			'x-cell__row--radio': this.props.radio,
			'x-cell__row--radio-checked': this.props.radio && this.props.checked,
			'x-cell__row--checkbox': this.props.checkbox,
			'x-cell__row--checkbox-checked': this.props.checkbox && this.props.checked,
			'x-cell__row--arrow': this.props.arrow,
		}, this.props.className);

		// 如果有onClick事件则绑定
		if (this.props.onClick){
			props.onClick = this._click.bind(this);
		}

		// 一些快捷的绑定方式（只允许在没有children时）
		let children = [];
		if (this.props.children == undefined){
			if (this.props.header) {
				let node;
				if (typeof this.props.header === 'object') {
					node = this.props.header;
				} else {
					node = <label>{ this.props.header }</label>;
				}
				children.push(
					<CellRowHeader key={ 'x-key-' + children.length }>{ node }</CellRowHeader>
				);
			}
			if (this.props.body) {
				let node;
				if (typeof this.props.body === 'object') {
					node = this.props.body;
				} else {
					node = <p>{ this.props.body }</p>;
				}
				children.push(
					<CellRowBody key={ 'x-key-' + children.length }>{ node }</CellRowBody>
				);
			}
			if (this.props.footer) {
				let node;
				if (typeof this.props.footer === 'object') {
					node = this.props.footer;
				} else {
					node = <span>{ this.props.footer }</span>;
				}
				children.push(
					<CellRowFooter key={ 'x-key-' + children.length }>{ node }</CellRowFooter>
				);
			}
		}

		// 返回
		if (this.props.to && !this.props.radio) {
			return (
				<Link to={ this.props.to } className={ css } { ...props }>
					{ this.props.children }{ children }
				</Link>
			);
		} else {
			return (
				<article className={ css } { ...props }>
					{ this.props.children }{ children }
				</article>
			);
		}
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
		let css = classnames('x-cell__row__header', this.props.className);
		return (
			<header className={ css }>
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
		let css = classnames('x-cell__row__body', this.props.className);
		return (
			<div className={ css }>
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
		let css = classnames('x-cell__row__footer', this.props.className);
		return (
			<footer className={ css }>
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
		let css = classnames('x-cell__title', this.props.className);
		return (
			<h2 className={ css }>
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