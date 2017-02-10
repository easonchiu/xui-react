import React, { Component } from 'react'

import Layout from '../../Xui/Components/Layout'
import Cell from '../../Xui/Components/Cell'
import Icon from '../../Xui/Components/Icon'
import Button from '../../Xui/Components/Button'
import Alert from '../../Xui/Components/Alert'

class ViewAlert extends Component {
	constructor(props) {
		super(props);
	}

	_click() {

		Alert.show({
			title: '标题',
			desc: 'balabalabala',
			className: 'css',
			textN: 'No',
			text: 'Yes',
			callbackN: () => {
				Alert.show('callback no');
			},
			callback: () => {
				Alert.show('callback yes');
			}
		});

	}

	render() {

		return (
			<Layout>
				
				<Layout.Header
					title="弹出框"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>

					<Cell.Title title="弹出框" />

					<Cell>
						<Cell.Row body={ <Button type="primary" onClick={ this._click }>弹出</Button> } />
					</Cell>

				</Layout.Body>

			</Layout>
		);
	}
}

export default ViewAlert