import { Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  onItemClick = value => {
    this.setState({
      checked: value
    })
  }

  cellClick = value => {
    Toast.show('You click with item : ' + value)
  }
}
