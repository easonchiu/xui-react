// import { Loading, Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  showMe1 = value => {
    this.setState({
      visible1: true
    })
  }

  hideMe1 = value => {
    this.setState({
      visible1: false
    })
  }

  showMe2 = value => {
    this.setState({
      visible2: true
    })
  }

  hideMe2 = value => {
    this.setState({
      visible2: false
    })
  }
}
