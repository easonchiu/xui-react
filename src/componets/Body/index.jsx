import React, { Component, PropTypes } from 'react'
import style from './style.scss'

class Body extends Component {
	render () {
		return (
			<div className="body">
				<div className="hd">
					<div className="inner clearfix">
						<h1>React Demo</h1>
						<a href="javascript:;" className="btn">添加问题</a>
					</div>
				</div>
				<div className="quebar inner">
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
				<div className="list inner">
					<div className="item clearfix">
						<div className="l">
							<a href="javascript:;" className="sbtn up">顶<span>22</span></a>
							<a href="javascript:;" className="sbtn down">踩</a>
						</div>
						<div className="r">
							<h3>你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？</h3>
							<p>你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？</p>
						</div>
					</div>
					<div className="item clearfix">
						<div className="l">
							<a href="javascript:;" className="sbtn up">顶<span>22</span></a>
							<a href="javascript:;" className="sbtn down">踩</a>
						</div>
						<div className="r">
							<h3>你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？</h3>
							<p>你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？</p>
						</div>
					</div>
					<div className="item clearfix">
						<div className="l">
							<a href="javascript:;" className="sbtn up">顶<span>22</span></a>
							<a href="javascript:;" className="sbtn down">踩</a>
						</div>
						<div className="r">
							<h3>你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？</h3>
							<p>你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？</p>
						</div>
					</div>
					<div className="item clearfix">
						<div className="l">
							<a href="javascript:;" className="sbtn up">顶<span>22</span></a>
							<a href="javascript:;" className="sbtn down">踩</a>
						</div>
						<div className="r">
							<h3>你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？你的问题是？</h3>
							<p>你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？你问题的描述是？</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Body.PropTypes = {
	
}

export default Body;