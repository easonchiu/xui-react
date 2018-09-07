import { Toast, Alert } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  easyAlert = e => {
    Alert.show('是否调整租车时间？')
  }

  alertWithTitle = e => {
    Alert.show({
      title: '弹框标题',
      desc: '是否调整租车时间？'
    })
  }

  alertWithTwoBtn = e => {
    Alert.show({
      title: '弹框标题',
      desc: '是否调整租车时间？',
      btnTextN: 'No',
      btnTextY: 'Yes',
      callbackY: () => {
        Toast.show('Click yes')
      },
      callbackN: () => {
        Toast.show('Click no')
      }
    })
  }
}
