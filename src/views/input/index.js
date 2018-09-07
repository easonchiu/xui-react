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
      <Layout className="view-input">
        <Layout.Header
          title="Input"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Input placeholder="Placeholder" />

          <br />

          <Input disabled placeholder="Disabled" />

          <br />

          <Input error placeholder="Error" />

          <br />

          <Input
            placeholder="Addon before"
            addonBefore={<a href="#">Before</a>}
          />

          <br />

          <Input
            placeholder="Addon after"
            addonAfter={<a href="#">After</a>}
          />

          <br />

          <Input
            multi
            placeholder="Multi input"
          />

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
