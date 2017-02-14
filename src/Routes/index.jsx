import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AppIndex from '../Views/Index'

const Layout = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Layout').default);
    }, 'layout');
}

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

const Switch = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Switch').default);
    }, 'switch');
}

const Alert = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Alert').default);
    }, 'alert');
}

const Loading = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Loading').default);
    }, 'loading');
}

const Toast = (ns, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Views/Toast').default);
    }, 'toast');
}

const Routes = (
	<Router history={ hashHistory }>
		<Route path="/" component={ AppIndex }></Route>
        <Route path="/layout" getComponent={ Layout }></Route>
        <Route path="/cell" getComponent={ Cell }></Route>
        <Route path="/panel" getComponent={ Panel }></Route>
        <Route path="/grid" getComponent={ Grid }></Route>
        <Route path="/button" getComponent={ Button }></Route>
        <Route path="/logis" getComponent={ Logis }></Route>
        <Route path="/icon" getComponent={ Icon }></Route>
        <Route path="/alert" getComponent={ Alert }></Route>
        <Route path="/loading" getComponent={ Loading }></Route>
        <Route path="/toast" getComponent={ Toast }></Route>
		<Route path="/switch" getComponent={ Switch }></Route>
		<Redirect from="*" to="/" />
	</Router>
);

export default Routes;





