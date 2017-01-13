import './Assets/Styles/reset'
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import configureStore, { DevTools } from './Redux/Store'
import Routes from './Routes'

let store = configureStore();

//<DevTools store={ store } />

render(
	<div>
		<Provider store={ store }>
			<Router history={ hashHistory } routes={ Routes } />
		</Provider>
		
	</div>,
	document.getElementById('app')
);