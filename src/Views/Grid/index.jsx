import React, { Component } from 'react'

import Layout from '../../Xui/Components/Layout'
import Icon from '../../Xui/Components/Icon'
import Grid from '../../Xui/Components/Grid'
import Cell from '../../Xui/Components/Cell'

class ViewGrid extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>

				<Layout.Header
					title="栅格"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>

					<Cell.Title title="默认形式" />
					<Grid>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/4 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/4 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/4 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/4 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/3 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/3 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/3 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
					</Grid>

					<Cell.Title title="带描边的形式" />
					<Grid border>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
					</Grid>

					<Cell.Title title="有边距的形式" />
					<Grid margin>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
						<Grid.Item col={ 1/2 }>
							<img src="./src/Assets/Images/headpic.jpeg" />
						</Grid.Item>
					</Grid>

				</Layout.Body>

			</Layout>
		);
	}
}

export default ViewGrid