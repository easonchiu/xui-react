import { Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  showMe = () => {
    this.setState({
      visible: true,
    })
  }

  hideMe = () => {
    this.setState({
      visible: false,
    })
  }

  chooseOne = value => {
    this.hideMe()
    Toast.show('Your choose is : ' + value)
  }

}
