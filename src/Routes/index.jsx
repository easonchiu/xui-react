import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AppIndex from '../Views/Index'
import Cell from '../Views/Cell'
import Panel from '../Views/Panel'
import Goods from '../Views/Goods'
import Button from '../Views/Button'
import Others from '../Views/Others'
import Logis from '../Views/Logis'

const Routes = (
	<Router history={ hashHistory }>
		<Route path="/" component={ AppIndex }>
			<IndexRoute component={ Cell }></IndexRoute>
			<Route path="/panel" component={ Panel }></Route>
			<Route path="/goods" component={ Goods }></Route>
			<Route path="/button" component={ Button }></Route>
			<Route path="/others" component={ Others }></Route>
		</Route>
		<Route path="/logis" component={ Logis }></Route>
		<Redirect from="*" to="/" />
	</Router>
);

export default Routes;



// https://github.com/ruanyf/react-demos/tree/v15.0
// http://www.cnblogs.com/yongjz/p/5356914.html

// http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu

// http://www.cnblogs.com/BestMePeng/p/React_Router.html