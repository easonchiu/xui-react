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
      <Layout className="view-alert">
        <Layout.Header
          title="Alert"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell>
            <Cell.Row>
              <Button onClick={this.evt.easyAlert}>
                Normal
              </Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.alertWithTitle}>
                Alert with title
              </Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.alertWithTwoBtn}>
                Alert with ok or no
              </Button>
            </Cell.Row>
          </Cell>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
