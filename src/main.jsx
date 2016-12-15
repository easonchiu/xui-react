import './Assets/Styles/reset.css'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory } from 'react-router'


import AppIndex from './Views/Index/index.jsx'

import Message from './Views/Message/index.jsx'
import Friends from './Views/Friends/index.jsx'
import Find from './Views/Find/index.jsx'
import Mine from './Views/Mine/index.jsx'
import MessageDetails from './Views/MessageDetails/index.jsx'

// Router组件有一个参数history，它的值hashHistory表示，路由的切换由URL的hash变化决定，即URL的#部分发生变化。举例来说，用户访问http://www.example.com/，实际会看到的是http://www.example.com/#/

render(
	<Router history={ hashHistory }>
		<Route path="/" component={ AppIndex }>
			<IndexRoute component={ Message }></IndexRoute>
			<Route path="/friends" component={ Friends }></Route>
			<Route path="/find" component={ Find }></Route>
			<Route path="/mine" component={ Mine }></Route>
		</Route>
		<Route path="/messageDetails" component={ MessageDetails }></Route>
		<Redirect from="*" to="/" />
	</Router>,
	document.getElementById('app')
);

// https://github.com/ruanyf/react-demos/tree/v15.0
// http://www.cnblogs.com/yongjz/p/5356914.html

// http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu