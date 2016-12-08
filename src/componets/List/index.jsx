import React, { Component, PropTypes } from 'react'

class List extends Component {
	render() {
		return (
			<div className="list inner">
				{
					this.props.data.map(d => {
						return (
							<div className="item clearfix" key={ d.key }>
								<div className="l">
									<a href="javascript:;" className="sbtn up">顶<span>{ d.c }</span></a>
									<a href="javascript:;" className="sbtn down">踩</a>
								</div>
								<div className="r">
									<h3>{ d.q }</h3>
									<p>{ d.a }</p>
								</div>
							</div>
						)
					})
				}
			</div>
		);
	}
}

List.defaultProps = {
	data: []
}

List.propTypes = {
	data: PropTypes.array.isRequired
}

export default List;