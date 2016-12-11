import './styles/reset.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './componets/App/index.jsx'


import SendBox from './componets/SendBox/index.jsx'

// Router组件有一个参数history，它的值hashHistory表示，路由的切换由URL的hash变化决定，即URL的#部分发生变化。举例来说，用户访问http://www.example.com/，实际会看到的是http://www.example.com/#/

render(
	<Router history={ hashHistory }>
		<Route path="/" component={ App }></Route>
		<Route path="/*" component={ SendBox }></Route>
	</Router>,
	document.getElementById('app')
);

// https://github.com/ruanyf/react-demos/tree/v15.0
// http://www.cnblogs.com/yongjz/p/5356914.html

// http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu