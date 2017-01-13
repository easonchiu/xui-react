import './Assets/Styles/reset'
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from './Redux/Store'
import Routes from './Routes'

let store = configureStore();

console.log(store)

// <Provider store={ configureStore }>
// </Provider>

render(
	
		<Router history={ hashHistory } routes={ Routes } />
	,
	document.getElementById('app')
);