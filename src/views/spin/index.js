import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      checked: 1
    }
  }

  render() {
    return (
      <Layout className="view-spin">
        <Layout.Header
          title="Spin"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Spin text="Loading..." />

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
