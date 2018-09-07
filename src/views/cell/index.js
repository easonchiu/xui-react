import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list: [1, 2, 3],
      checked: 1
    }
  }

  render() {
    return (
      <Layout className="view-cell">
        <Layout.Header
          title="Cell"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <h2>Normal</h2>

          <Cell className="list">
            {
              this.state.list.map(item => (
                <Cell.Row key={item}>
                  <Radio
                    checked={this.state.checked === item}
                    text={'radio ' + item}
                    onChange={this.evt.onItemClick.bind(null, item)}
                  />
                  <p className="text"></p>
                  <Switch
                    active={this.state.checked === item}
                    onChange={this.evt.onItemClick.bind(null, item)}
                  />
                </Cell.Row>
              ))
            }
          </Cell>

          <h2>Indent bottom line</h2>

          <Cell indentLine>
            {
              this.state.list.map(item => (
                <Cell.Row key={item}>
                  {item}
                </Cell.Row>
              ))
            }
          </Cell>

          <h2>Click event</h2>

          <Cell onClick={this.evt.cellClick}>
            {
              this.state.list.map(item => (
                <Cell.Row key={item} value={item}>
                  {item}
                </Cell.Row>
              ))
            }
          </Cell>

          <h2>Arrow icon</h2>

          <Cell arrow onClick={e => {}}>
            {
              this.state.list.map(item => (
                <Cell.Row key={item}>
                  {item}
                </Cell.Row>
              ))
            }
          </Cell>

          <h2>Mixin</h2>

          <Cell>
            <Cell.Row arrow>
              arrow icon
            </Cell.Row>
            <Cell.Row value={'mixin'} onClick={this.evt.cellClick}>
              onClick
            </Cell.Row>
            <Cell.Row>
              nothing
            </Cell.Row>
          </Cell>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
