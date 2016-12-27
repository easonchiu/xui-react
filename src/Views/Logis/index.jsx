import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { createHistory } from 'history'

import HeaderBar, { HeaderBarTools } from '../../Xui/Components/HeaderBar.jsx'
import Body from '../../Xui/Components/Body.jsx'
import { CellTitle } from '../../Xui/Components/Cell.jsx'
import Logis, { LogisRow } from '../../Xui/Components/Logis.jsx'



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
				<HeaderBar title="物流跟踪">
					<HeaderBarTools>
						<a onClick={ this.goBack }><i className="x-icon--back" />返回</a>
					</HeaderBarTools>
				</HeaderBar>
				<Body>
					<CellTitle title="物流跟踪" />
					<Logis>
						{
							[1, 2, 3].map(e => {
								return (
									<LogisRow key={ e }>
										<p>已离开收寄点，发往上海速递处理中心，南通市</p>
										<time>2016-01-21 11:45:20</time>
									</LogisRow>
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