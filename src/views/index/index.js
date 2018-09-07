import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list: [{
        label: 'Layout',
        name: '布局',
        route: 'layout'
      }, {
        label: 'Cell',
        name: '列',
        route: 'cell'
      }, {
        label: 'Button',
        name: '按钮',
        route: 'button'
      }, {
        label: 'Input',
        name: '输入框',
        route: 'input'
      }, {
        label: 'Tabs',
        name: '标签页',
        route: 'tabs'
      }, {
        label: 'Alert',
        name: '提示框',
        route: 'alert'
      }, {
        label: 'Toast',
        name: '轻提示',
        route: 'toast'
      }, {
        label: 'Loading',
        name: '全局Loading',
        route: 'loading'
      }, {
        label: 'Spin',
        name: '提示性Loading',
        route: 'spin'
      }, {
        label: 'Radio',
        name: '选择',
        route: 'radio'
      }, {
        label: 'Switch',
        name: '开关',
        route: 'switch'
      }, {
        label: 'Popup',
        name: '弹出框',
        route: 'popup'
      }, {
        label: 'Dialog',
        name: '对话框',
        route: 'dialog'
      }, {
        label: 'ActionSheet',
        name: '动作框',
        route: 'actionSheet'
      }, {
        label: 'TimePicker',
        name: '时间选择',
        route: 'timePicker'
      }]
    }
  }

  render() {
    return (
      <Layout className="view-index">
        <Layout.Header
          title="XUI"
        />

        <Layout.Body>

          <Cell
            indentLine
            className="list"
            onClick={this.evt.itemClick}
          >
            {
              this.state.list.map(item => (
                <Cell.Row key={item.label} value={item.route}>
                  <p>{item.label}</p>
                  <span>{item.name}</span>
                </Cell.Row>
              ))
            }
          </Cell>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
