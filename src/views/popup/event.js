// import { Loading, Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  showMe = e => {
    this.setState({
      visible: true,
      height: 50,
      top: false
    })
  }

  showScrollerMe = e => {
    this.setState({
      visible2: true
    })
  }

  showFullMe = e => {
    this.setState({
      visible: true,
      height: 100,
      top: false
    })
  }

  showMeTop = e => {
    this.setState({
      visible: true,
      height: 50,
      top: true
    })
  }

  hideMe = e => {
    this.setState({
      visible: false
    })
  }

  hideMe2 = e => {
    this.setState({
      visible2: false
    })
  }
}
