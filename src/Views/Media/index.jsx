import React, { Component, PropTypes } from 'react'
import Cell from '../../Xui/Components/Cell'
import Media from '../../Xui/Components/Media'


class View extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Cell.Title title="媒体" />
				<Media>
					<Media.Body>
						adf
					</Media.Body>
				</Media>

				<div className="x-media">
					<div className="x-media__left">
						
					</div>
					<div className="x-media__body">

					</div>
					<div className="x-media_right">
						
					</div>
				</div>
			</div>
		);
	}
}

export default View;