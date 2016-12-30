import React, { Component, PropTypes } from 'react'
import Cell, { CellTitle, CellRow, CellRowHeader, CellRowBody } from '../../Xui/Components/Cell'
import Panel, { PanelHeader, PanelBody, PanelFooter } from '../../Xui/Components/Panel'
import Icon from '../../Xui/Components/Icon'

class PanelView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let cell = (
			<Cell>
				{
					[1, 2, 3].map(e => {
						return (
							<CellRow key={ e }>
								<CellRowHeader>
									<img src="./src/Assets/Images/headpic.jpeg" />
								</CellRowHeader>
								<CellRowBody>
									<h6>列表的大标题，可以是产品名称等</h6>
									<span>产品的描述性文字</span>
								</CellRowBody>
							</CellRow>
						);
					})
				}
			</Cell>
		)

		return (
			<div>
				<CellTitle title="模块" />
				<Panel>
					<PanelHeader>
						<h2>模块名称</h2>
						<a>更多<Icon name="right" /></a>
					</PanelHeader>
					<PanelBody>
						
						{ cell }

					</PanelBody>
					<PanelFooter>
						<span>底部提示文字</span>
					</PanelFooter>
				</Panel>
				
			</div>
		);
	}
}

export default PanelView;