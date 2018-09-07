import { Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  click = e => {
    Toast.show('Click!')
  }
}
