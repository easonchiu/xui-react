import React, { Component } from 'react'

import Layout from '../../Xui/Components/Layout'
import Cell from '../../Xui/Components/Cell'
import Icon from '../../Xui/Components/Icon'
import Button from '../../Xui/Components/Button'
import Loading from '../../Xui/Components/Loading'

class ViewLoading extends Component {
	constructor(props) {
		super(props);
	}
	
	_click() {
		Loading.show();
		setTimeout(Loading.hide, 2000);
	}

	render() {
		return (
			<Layout>

				<Layout.Header
					title="加载框"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>

					<Cell.Title title="加载框" />
					<Cell>
						<Cell.Row body={
							<Button type="primary" onClick={ this._click }>弹出</Button>
						} />
					</Cell>

				</Layout.Body>

			</Layout>
		);
	}
}

export default ViewLoading