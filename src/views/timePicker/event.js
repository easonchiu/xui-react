import { Toast } from 'auto'

export default class Event {
  goBack = () => {
    this.props.history.goBack()
  }

  reset = () => {
    this.tp.reset()
  }

  setTime = () => {
    this.tp.setTime(new Date(2018, 4, 2, 7, 0))
  }

  setTime2 = () => {
    this.tp.setTime(new Date(2018, 5, 1, 1, 15))
  }

  setData = () => {
    const picker = {
      ...this.state.picker,
      defaultDay: new Date(2018, 5, 2, 8, 0),
      data: [{
        day: new Date(2018, 5, 1),
        times: ['0000', '1015']
      }, {
        day: new Date(2018, 5, 2),
        times: ['0500', '1100']
      }, {
        day: new Date(2018, 5, 3),
        times: [['0000', '0015'], ['0145', '1200']]
      }]
    }
    this.setState({
      picker
    })
  }

  show = () => {
    this.setState({
      visible: true
    }, () => {
      this.tp.refresh()
      const t = this.tp.getTime()
      Toast.show(t)
    })
  }

  show2 = () => {
    this.setState({
      visible2: true
    }, () => {
      this.tr.refresh()
      const t = this.tr.getTimeRange()
      Toast.show(t)
    })
  }

  hide = () => {
    this.setState({
      visible: false
    })
  }

  hide2 = () => {
    this.setState({
      visible2: false
    })
  }

  showTime = t => {
    Toast.show(t)
  }
}
