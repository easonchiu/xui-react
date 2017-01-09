import './Assets/Styles/reset'
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './Redux/Store'
import Routes from './Routes'

render(
	<Provider store={ store }>
		<Router history={ hashHistory } routes={ Routes } />
	</Provider>,
	document.getElementById('app')
);