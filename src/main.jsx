import R from './styles/reset.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Comp from './componets/Comp/index.jsx'


render(
	<Comp />,
	document.getElementById('app')
);