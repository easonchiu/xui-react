import React, { Component, PropTypes } from 'react'

class SendBox extends Component {
	render() {
		return (
			<div className="sendBox inner">
				<div className="q clearfix">
					<h2>问题：</h2>
					<input className="input" type="text" placeholder="你的问题是？" />
					<textarea className="input" placeholder="你问题的描述是？"></textarea>
					<div className="btns">
						<a href="javascript:;" className="btnC">取消</a>
						<a href="javascript:;" className="btn">添加</a>
					</div>
				</div>
			</div>
		);
	}
}

export default SendBox;