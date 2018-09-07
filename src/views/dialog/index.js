import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      visible1: false,
      visible2: false,
    }
  }

  renderDialog() {
    return (
      <Dialog
        visible={this.state.visible1}
        onBgClick={this.evt.hideMe1}
      >
        Some text.
        <br />
        <Input type="text" placeholder="Placeholder" />
        <br />
        <Button onClick={this.evt.hideMe1}>Ok</Button>
        <br />
        <Button onClick={this.evt.hideMe1} type="default">Close me</Button>
      </Dialog>
    )
  }

  renderDialogWithInnerScroll() {
    return (
      <Dialog
        visible={this.state.visible2}
        onBgClick={this.evt.hideMe2}
        height={50}
      >
        Some text.
        <Dialog.Scroller>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(res => (
              <p key={res}>{res}<br /><br /><br /></p>
            ))
          }
        </Dialog.Scroller>
        <Button onClick={this.evt.hideMe2} type="default">Close me</Button>
      </Dialog>
    )
  }

  render() {
    return (
      <Layout className="view-dialog">
        <Layout.Header
          title="Dialog"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell className="list">
            <Cell.Row>
              <Button onClick={this.evt.showMe1}>Normal</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.showMe2}>Dialog with inner scroll</Button>
            </Cell.Row>
          </Cell>

          {this.renderDialog()}
          {this.renderDialogWithInnerScroll()}

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
