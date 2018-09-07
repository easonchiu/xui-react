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
    }
  }

  renderActionSheet() {
    return (
      <ActionSheet
        visible={this.state.visible}
        onBgClick={this.evt.hideMe}
        title="Please choose one of them."
        onClose={this.evt.hideMe}
        onClick={this.evt.chooseOne}
      >
        <ActionSheet.Item text="Action A" value={1} />
        <ActionSheet.Item text="Action B" value={2} />
        <ActionSheet.Item text="Action C" value={3} />
      </ActionSheet>
    )
  }

  render() {
    return (
      <Layout className="view-action-sheet">
        <Layout.Header
          title="ActionSheet"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell className="list">
            <Cell.Row>
              <Button onClick={this.evt.showMe}>Normal</Button>
            </Cell.Row>
          </Cell>

          {this.renderActionSheet()}

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
