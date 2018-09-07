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
      <Layout className="view-radio">
        <Layout.Header
          title="Radio"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell>
            <Cell.Row>
              <Radio
                checked={this.state.checked === 1}
                value={1}
                text="Radio A"
                onChange={this.evt.itemClick}
              />
            </Cell.Row>
            <Cell.Row>
              <Radio
                checked={this.state.checked === 2}
                value={2}
                text="Radio B"
                onChange={this.evt.itemClick}
              />
            </Cell.Row>
            <Cell.Row>
              <Radio
                checked={this.state.checked === 3}
                value={3}
                text="Radio C"
                onChange={this.evt.itemClick}
              />
            </Cell.Row>
            <Cell.Row>
              <Radio
                disabled
                text="Disabled."
                onChange={this.evt.itemClick}
              />
            </Cell.Row>
          </Cell>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
