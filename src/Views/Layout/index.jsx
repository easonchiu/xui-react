import './style'
import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

import Layout from '../../Xui/Components/Layout'
import Cell from '../../Xui/Components/Cell'
import Icon from '../../Xui/Components/Icon'
import Button from '../../Xui/Components/Button'
import Rmb from '../../Xui/Components/Rmb'
import Grid from '../../Xui/Components/Grid'

class ViewLayout extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>

				<Layout.Header
					title="布局"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>

					<Cell.Title title="头基本结构" />
					<Layout.Header
						title="标题"
						start={ <a>返回</a> }
						end={ <a>更多</a> } />

					<Cell.Title title="头基本结构" />
					<Layout.Header
						title="标题"
						start={ <a>返回</a> }
						end={ <a>更多</a> } />

					<Cell.Title title="头部有图标" />
					<Layout.Header
						title="标题"
						start={ <a><Icon name="back" /></a> }
						end={ <a><Icon name="more" /></a> } />

					<Cell.Title title="头部有图标+文字" />
					<Layout.Header
						title="标题"
						start={ <a><Icon name="back" />返回</a> }
						end={ <a><Icon name="user" />我</a> } />

					<Cell.Title title="头部有多个图标" />
					<Layout.Header title="标题">
						<Layout.Header.Start>
							<a><Icon name="back" /></a>
							<a><Icon name="close" /></a>
						</Layout.Header.Start>
						<Layout.Header.End>
							<a><Icon name="user" /></a>
							<a><Icon name="mail" /></a>
							<a><Icon name="more" /></a>
						</Layout.Header.End>
					</Layout.Header>

					<Cell.Title title="头部按钮" />
					<Layout.Header title="标题">
						<Layout.Header.Start>
							<Button mini><Icon name="home" />&nbsp;返回首页</Button>
						</Layout.Header.Start>
						<Layout.Header.End>
							<Button type="vital" mini>完成注册</Button>
						</Layout.Header.End>
					</Layout.Header>

					<Cell.Title title="底部菜单（结合Grid与Icon）" />
					<Layout.Footer>
						<Grid className="footer-nav">
							<Grid.Row>
								<Grid.Item col={ 1/4 }>
									<Link to="/layout">
										<Icon name="home" />
										<p>首页</p>
									</Link>
								</Grid.Item>
								<Grid.Item col={ 1/4 }>
									<Link to="/layout">
										<Icon name="cart" />
										<p>购物车</p>
									</Link>
								</Grid.Item>
								<Grid.Item col={ 1/4 }>
									<Link to="/layout">
										<Icon name="mail" />
										<p>邮箱</p>
									</Link>
								</Grid.Item>
								<Grid.Item col={ 1/4 }>
									<Link to="/layout">
										<Icon name="user" />
										<p>我</p>
									</Link>
								</Grid.Item>
							</Grid.Row>
						</Grid>
					</Layout.Footer>

					<Cell.Title title="底部按钮（结合Button）" />
					<Layout.Footer padding>
						<div className="total-price">总共需支付<Rmb price="199.00" />元</div>
						<Button.Group>
							<Button>按钮A</Button>
							<Button type="primary">按钮B</Button>
						</Button.Group>
					</Layout.Footer>

				</Layout.Body>

				<Layout.Footer padding>
					页脚
				</Layout.Footer>

			</Layout>
		);
	}
}

export default ViewLayout

