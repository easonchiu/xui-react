import React, { Component, PropTypes } from 'react'

import Layout from '../../Xui/Components/Layout'
import Cell from '../../Xui/Components/Cell'
import Switch from '../../Xui/Components/Switch'
import Icon from '../../Xui/Components/Icon'

class ViewSwitch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: true,
		}
	}

	_click() {
		this.setState({
			active: !this.state.active,
		});
	}

	render() {
		return (
			<Layout>
				<Layout.Header
					title="开关"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>

					<Cell.Title title="开关" />
					<Cell>
						<Cell.Row
							body="打开？"
							footer={ <Switch active={ this.state.active } onClick={ this._click.bind(this) } /> } />
						<Cell.Row
							body="打开？"
							footer={ <Switch active={ !this.state.active } onClick={ this._click.bind(this) } /> } />
					</Cell>

					<Cell.Title title="自定义文字" />
					<Cell>
						<Cell.Row
							body="打开？"
							footer={ <Switch on="是" off="否" active={ this.state.active } onClick={ this._click.bind(this) } /> } />
					</Cell>

				</Layout.Body>
			</Layout>
		);
	}
}


export default ViewSwitch;