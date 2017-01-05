import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AppIndex from '../Views/Index'
import Cell from '../Views/Cell'


const Panel = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Panel').default);
    }, 'panel');
}

const Goods = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Goods').default);
    }, 'goods');
}

const Button = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Button').default);
    }, 'button');
}

const Others = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Others').default);
    }, 'others');
}

const Logis = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Logis').default);
    }, 'logis');
}

const Test = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Test').default);
    }, 'test');
}



const Routes = (
	<Router history={ hashHistory }>
		<Route path="/" component={ AppIndex }>
			<IndexRoute component={ Cell }></IndexRoute>
			<Route path="/panel" getComponent={ Panel }></Route>
			<Route path="/goods" getComponent={ Goods }></Route>
			<Route path="/button" getComponent={ Button }></Route>
			<Route path="/others" getComponent={ Others }></Route>
		</Route>
		<Route path="/logis" getComponent={ Logis }></Route>
		<Route path="/t" getComponent={ Test }></Route>
		<Redirect from="*" to="/" />
	</Router>
);

export default Routes;









// https://github.com/ruanyf/react-demos/tree/v15.0
// http://www.cnblogs.com/yongjz/p/5356914.html

// http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu

// http://www.cnblogs.com/BestMePeng/p/React_Router.html