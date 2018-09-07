import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      visible2: false,
      height: 50,
      top: false
    }
  }

  renderPopup() {
    return (
      <Popup
        top={this.state.top}
        height={this.state.height}
        visible={this.state.visible}
        onBgClick={this.evt.hideMe}
      >
        I am a popup.
        <br /><br />
        <Button mini onClick={this.evt.hideMe}>
          Close me
        </Button>
      </Popup>
    )
  }

  renderScollerPopup() {
    return (
      <Popup
        visible={this.state.visible2}
        onBgClick={this.evt.hideMe2}
        noPadding
        className="scroll-popup"
      >
        <h1>Scroll test.</h1>
        <Popup.Scroller>
          <Cell>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(res => (
                <Cell.Row label={res} key={res} />
              ))
            }
          </Cell>
        </Popup.Scroller>
      </Popup>
    )
  }

  render() {
    return (
      <Layout className="view-index">
        <Layout.Header
          title="Popup"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell>
            <Cell.Row>
              <Button onClick={this.evt.showMe}>Show popup</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.showMeTop}>Show popup from top</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.showFullMe}>Show popup with full height</Button>
            </Cell.Row>
            <Cell.Row>
              <Button onClick={this.evt.showScrollerMe}>Show popup with inner scroll.</Button>
            </Cell.Row>
          </Cell>

          {this.renderPopup()}

          {this.renderScollerPopup()}

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
