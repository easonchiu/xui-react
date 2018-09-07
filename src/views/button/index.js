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
      <Layout className="view-button">
        <Layout.Header
          title="Button"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell>
            <Cell.Row>
              <Button onClick={this.evt.click}>Primary Button</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.click} type="danger">Danger Button</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.click} type="default">Default Button</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.click} mini>Mini type</Button>
              &nbsp;
              <Button onClick={this.evt.click} mini type="danger">Mini type</Button>
              &nbsp;
              <Button onClick={this.evt.click} mini type="default">Mini type</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.click} loading>With loading</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.click} disabled>Disabled</Button>
            </Cell.Row>
          </Cell>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
