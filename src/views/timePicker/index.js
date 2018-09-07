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

      // 单时间选择
      picker: {
        data: [{
          day: new Date(2018, 4, 1),
          times: ['1000', '1000']
        }, {
          day: new Date(2018, 4, 2),
          times: ['0500', '1100']
        }, {
          day: new Date(2018, 4, 3),
          times: [['0000', '0015'], ['0145', '1200']]
        }],
        hideDay: false,
        format: ['MM月dd日 周wk', 'h点', 'm分'],
        defaultDay: new Date(2018, 4, 3, 2, 0),
      },
    }
  }

  renderTimePicker() {
    return (
      <TimePicker
        data={this.state.picker.data}
        format={this.state.picker.format}
        hideDay={this.state.picker.hideDay}
        interval={15}
        defaultDay={this.state.picker.defaultDay}
        ref={e => {
          this.tp = e
        }}
        onChange={this.evt.showTime}
      />
    )
  }

  render() {
    return (
      <Layout className="view-index">
        <Layout.Header
          title="TimePicker"
          onBackClick={this.evt.goBack}
        />

        <Layout.Body>

          <Cell>
            <Cell.Row>
              <Button onClick={this.evt.show}>Show</Button>
            </Cell.Row>
          </Cell>

          <Popup
            className="time-popup"
            noPadding
            visible={this.state.visible}
          >
            <div className="btns">
              <Button mini onClick={this.evt.reset}>
                复原
              </Button>
              <Button mini onClick={this.evt.setTime}>
                设置时间(0502/07/00)
              </Button>
              <Button mini onClick={this.evt.setTime2}>
                设置时间(0601/01/15)
              </Button>
              <Button mini onClick={this.evt.setData}>
                设置时间数据
              </Button>
              <Button mini type="default" onClick={this.evt.hide}>
                关闭
              </Button>
            </div>
            <div className="tp">
              {
                this.renderTimePicker()
              }
            </div>
          </Popup>

        </Layout.Body>
      </Layout>
    )
  }
}

export default View
