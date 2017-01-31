import React, { Component, PropTypes } from 'react'


import Layout from '../../Xui/Components/Layout'
import Icon from '../../Xui/Components/Icon'
import Cell from '../../Xui/Components/Cell'


let Row = (props) => {
	return (
		<Cell.Row to={ props.to }>
			<Cell.Row.Header>
				{
					props.done ? <Icon name="check" type="vital" />
						: <Icon name="close" type="warn" />
				}
			</Cell.Row.Header>
			<Cell.Row.Body>
				<h6>{ props.title }<span>{ props.desc }</span></h6>
			</Cell.Row.Body>
		</Cell.Row>
	);
}


class Index extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>
				<Layout.Header
					title="XUI-React"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>
					
					<Cell.Title title="UI List" />

					<Cell>
					
						<Row title="布局" desc="Layout" done={ false } to="/layout" />
						<Row title="列表" desc="Cell" done={ true } to="/cell" />
						<Row title="按钮" desc="Button" done={ true } to="/button" />
						<Row title="弹出框" desc="Alert" done={ false } to="/alert" />
						<Row title="提示框" desc="Toast" done={ false } to="/toast" />
						<Row title="加载提示" desc="Loading" done={ false } to="/loading" />
						<Row title="模块" desc="Panel" done={ true } to="/panel" />
						<Row title="栅格" desc="Grid" done={ false } to="/grid" />
						<Row title="商品" desc="Goods" done={ false } to="/goods" />
						<Row title="物流跟踪" desc="Logis" done={ true } to="/logis" />
						<Row title="图标" desc="Icon" done={ true } to="/icon" />

					</Cell>

				</Layout.Body>
			</Layout>
		);
	}
}

export default Index;