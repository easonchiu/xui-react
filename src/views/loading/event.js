import { Loading } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  show = () => {
    Loading.show()
    setTimeout(() => {
      Loading.hide()
    }, 2000)
  }

  showMore = () => {
    Loading.show('Loading now...')
    setTimeout(() => {
      Loading.hide()
    }, 2000)
  }

  showWithTimeout = () => {
    Loading.show('Wait 2s...', 2000)
  }
}
