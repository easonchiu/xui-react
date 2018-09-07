import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      active1: false,
      active2: false,
      active3: false,
    }
  }

  render() {
    return (
      <Layout className="view-switch">
        <Layout.Header
          title="Switch"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell className="list">
            <Cell.Row>
              <p className="text">Normal</p>
              <Switch
                active={this.state.active1}
                onChange={this.evt.item1Click}
              />
            </Cell.Row>
            <Cell.Row>
              <p className="text">With text</p>
              <Switch
                i="关"
                o="开"
                active={this.state.active2}
                onChange={this.evt.item2Click}
              />
            </Cell.Row>
            <Cell.Row>
              <p className="text">With icon</p>
              <Switch
                icon
                active={this.state.active3}
                onChange={this.evt.item3Click}
              />
            </Cell.Row>
            <Cell.Row>
              <p className="text">Disabled</p>
              <Switch
                disabled
                active={true}
              />
            </Cell.Row>
          </Cell>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
