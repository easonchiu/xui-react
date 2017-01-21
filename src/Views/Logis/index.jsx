import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { createHistory } from 'history'

import Header from '../../Xui/Components/Header'
import Body from '../../Xui/Components/Body'
import Cell from '../../Xui/Components/Cell'
import Logis from '../../Xui/Components/Logis'
import Icon from '../../Xui/Components/Icon'


class LogisView extends Component {
	constructor(props) {
		super(props);
		this.history = createHistory();
		this.goBack = this.goBack.bind(this);
	}
	goBack() {
		this.history.goBack();
	}
	render() {
		return (
			<div>
				<Header title="物流跟踪">
					<Header.Tools>
						<a onClick={ this.goBack }><Icon name="back" />返回</a>
					</Header.Tools>
				</Header>
				<Body>
					<Cell.Title title="物流跟踪" />
					<Logis>
						{
							[1, 2, 3].map(e => {
								return (
									<Logis.Row key={ e }>
										<p>已离开收寄点，发往上海速递处理中心，南通市</p>
										<time>2016-01-21 11:45:20</time>
									</Logis.Row>
								)
							})
						}
					</Logis>
				</Body>
			</div>
		);
	}
}

export default LogisView;