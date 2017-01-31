import React, { Component } from 'react'

import Layout from '../../Xui/Components/Layout'
import Icon from '../../Xui/Components/Icon'
import Grid from '../../Xui/Components/Grid'

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

					<Grid>
						<Grid.Item col={ 1/2 } />
						<Grid.Item col={ 1/2 } />
						<Grid.Item col={ 1/4 } />
						<Grid.Item col={ 3/4 } />
						<Grid.Item col={ 1/3 } />
						<Grid.Item col={ 2/3 } />
					</Grid>

				</Layout.Body>

			</Layout>
		);
	}
}

export default ViewGrid