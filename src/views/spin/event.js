import { Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  show = () => {
    Toast.show('I am a toast.')
  }

  show5s = () => {
    Toast.show('I am a toast duration 5s.', 5000)
  }
}
