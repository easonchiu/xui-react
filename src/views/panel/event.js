// import { Loading, Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  itemClick = value => {
    console.log(this, value)
  }
}
