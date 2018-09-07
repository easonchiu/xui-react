import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      active: 1
    }
  }

  renderTabs() {
    return (
      <Tabs active={this.state.active} onClick={this.evt.tabClick}>
        <Tabs.Item value={1}>Tab a</Tabs.Item>
        <Tabs.Item value={2}>Tab b</Tabs.Item>
        <Tabs.Item value={3}>Tab c</Tabs.Item>
      </Tabs>
    )
  }

  render() {
    return (
      <Layout className="view-tabs">
        <Layout.Header
          title="Tabs"
          onBackClick={this.evt.goBack}
          addonBottom={this.renderTabs()}
        />

        <Layout.Body>

          <div className="demo">
            {this.renderTabs()}
            <div className="content">content {this.state.active}.</div>
          </div>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
