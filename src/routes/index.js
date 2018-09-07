import APP_CONFIG from '../../appConfig'

import React from 'react'
import AsyncComponent from 'src/hoc/asyncComponent'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

const ViewIndex = AsyncComponent(e => import('src/views/index'))
const ViewLayout = AsyncComponent(e => import('src/views/layout'))
const ViewCell = AsyncComponent(e => import('src/views/cell'))
const ViewButton = AsyncComponent(e => import('src/views/button'))
const ViewInput = AsyncComponent(e => import('src/views/input'))
const ViewTabs = AsyncComponent(e => import('src/views/tabs'))
const ViewRadio = AsyncComponent(e => import('src/views/radio'))
const ViewSwitch = AsyncComponent(e => import('src/views/switch'))
const ViewAlert = AsyncComponent(e => import('src/views/alert'))
const ViewToast = AsyncComponent(e => import('src/views/toast'))
const ViewLoading = AsyncComponent(e => import('src/views/loading'))
const ViewSpin = AsyncComponent(e => import('src/views/spin'))
const ViewPopup = AsyncComponent(e => import('src/views/popup'))
const ViewDialog = AsyncComponent(e => import('src/views/dialog'))
const ViewActionSheet = AsyncComponent(e => import('src/views/actionSheet'))
const ViewTimePicker = AsyncComponent(e => import('src/views/timePicker'))

// 配置路由
const Routes = e => {
  return (
    <BrowserRouter basename={APP_CONFIG.basename}>
      <Switch>
        <Route exact path="/index" component={ViewIndex} />
        <Route exact path="/layout" component={ViewLayout} />
        <Route exact path="/cell" component={ViewCell} />
        <Route exact path="/button" component={ViewButton} />
        <Route exact path="/input" component={ViewInput} />
        <Route exact path="/tabs" component={ViewTabs} />
        <Route exact path="/radio" component={ViewRadio} />
        <Route exact path="/switch" component={ViewSwitch} />
        <Route exact path="/alert" component={ViewAlert} />
        <Route exact path="/toast" component={ViewToast} />
        <Route exact path="/loading" component={ViewLoading} />
        <Route exact path="/spin" component={ViewSpin} />
        <Route exact path="/popup" component={ViewPopup} />
        <Route exact path="/dialog" component={ViewDialog} />
        <Route exact path="/actionSheet" component={ViewActionSheet} />
        <Route exact path="/timePicker" component={ViewTimePicker} />
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
