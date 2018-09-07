import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout className="view-panel">
        <Layout.Header
          title="Panel"
        />

        <Layout.Body>

          unstable

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
