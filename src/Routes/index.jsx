import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AppIndex from '../Views/Index'

const Cell = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Cell').default);
    }, 'cell');
}

const Panel = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Panel').default);
    }, 'panel');
}

const Grid = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Grid').default);
    }, 'grid');
}

const Button = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Button').default);
    }, 'button');
}

const Logis = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Logis').default);
    }, 'logis');
}

const Icon = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Icon').default);
    }, 'icon');
}

const Routes = (
	<Router history={ hashHistory }>
		<Route path="/" component={ AppIndex }></Route>
        <Route path="/cell" getComponent={ Cell }></Route>
        <Route path="/panel" getComponent={ Panel }></Route>
        <Route path="/grid" getComponent={ Grid }></Route>
        <Route path="/button" getComponent={ Button }></Route>
        <Route path="/logis" getComponent={ Logis }></Route>
		<Route path="/icon" getComponent={ Icon }></Route>
		<Redirect from="*" to="/" />
	</Router>
);

export default Routes;









// https://github.com/ruanyf/react-demos/tree/v15.0
// http://www.cnblogs.com/yongjz/p/5356914.html

// http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu

// http://www.cnblogs.com/BestMePeng/p/React_Router.html