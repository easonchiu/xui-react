// import { Loading, Toast } from 'auto'

export default class Event {
  goBack = e => {
    this.props.history.goBack()
  }

  tabsClick = v => {
    this.setState({
      tabs: v
    })
  }

  ghostMode = () => {
    this.setState({
      ghostMode: !this.state.ghostMode
    })
  }

  throwError = () => {
    this.setState({
      errorInfo: 'Some Errors.'
    })

    setTimeout(() => {
      this.setState({
        errorInfo: ''
      })
    }, 2000)
  }

  loading = () => {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
  }
}
