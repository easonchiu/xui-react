// import { Loading, Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  item1Click = value => {
    this.setState({
      active1: !this.state.active1
    })
  }

  item2Click = value => {
    this.setState({
      active2: !this.state.active2
    })
  }

  item3Click = value => {
    this.setState({
      active3: !this.state.active3
    })
  }
}
