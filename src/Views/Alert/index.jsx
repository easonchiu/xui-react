import './style'

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
		Alert.show('内容区域');
	}

	_click2(){
		Alert.show({
			desc: '内容区域',
			btnTextN: '否',
			btnTextY: '是',
			callbackN: () => {
				Alert.show('<否>的回调');
			},
			callbackY: () => {
				Alert.show('<是>的回调');
			}
		});
	}

	_click3(){
		Alert.show({
			desc: '内容区域',
			btnTextN: '否',
			btnTextY: '是',
			className: 'myAlert',
			callbackN: () => {
				
			},
			callbackY: () => {
				
			}
		});
	}

	_click4(){
		Alert.show({
			desc: '（未完全实现）',
			input: 'text',
			placeholder: '请输入您的姓名',
			btnTextN: '否',
			btnTextY: '是',
			callbackN: () => {
				
			},
			callbackY: () => {
				
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
						<Cell.Row body={ <Button type="primary" onClick={ this._click2 }>两个按钮</Button> } />
						<Cell.Row body={ <Button type="primary" onClick={ this._click3 }>自定义样式</Button> } />
						<Cell.Row body={ <Button type="primary" onClick={ this._click4 }>输入框</Button> } />
					</Cell>

				</Layout.Body>

			</Layout>
		);
	}
}

export default ViewAlert