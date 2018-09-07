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
      <Layout className="view-toast">
        <Layout.Header
          title="Toast"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell>
            <Cell.Row>
              <Button onClick={this.evt.show}>Show</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.show5s}>Show with 5s</Button>
            </Cell.Row>
          </Cell>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
