import './Assets/Styles/reset'
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import initReactFastclick from 'react-fastclick'
initReactFastclick()

import Routes from './Routes'

render(
	<Router history={ hashHistory } routes={ Routes } />,
	document.getElementById('app')
);

