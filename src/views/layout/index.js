import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
class View extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      tabs: 1,
      ghostMode: false,
      loading: false,
      errorInfo: ''
    }
  }

  leftComp = () => {
    return <a href="javascript:;">Left</a>
  }

  rightComp = () => {
    return <a href="javascript:;">Right</a>
  }

  right2Comp = () => {
    return [
      <a key={1} href="javascript:;">RightA</a>,
      <span key={3}>&nbsp;&nbsp;&nbsp;&nbsp;</span>,
      <a key={2} href="javascript:;">RightB</a>
    ]
  }

  renderHeaders = () => {
    return (
      <div className={this.state.ghostMode ? 'black' : ''}>
        <br />

        {this.val}

        <Layout.Header
          title="Title"
          ghost={this.state.ghostMode}
          addonBefore={this.leftComp()}
          addonAfter={this.rightComp()}
        />

        <br />

        <Layout.Header
          title="Title"
          ghost={this.state.ghostMode}
          addonBefore={this.leftComp()}
          addonAfter={this.right2Comp()}
        />

        <br />

        <Layout.Header
          title="Clsoe"
          ghost={this.state.ghostMode}
          onCloseClick={e => {}}
        />

        <br />

        <Layout.Header
          title="Back"
          ghost={this.state.ghostMode}
          onBackClick={e => {}}
        />

        <br />
        <br />
        <br />
      </div>
    )
  }

  renderBody = () => {
    return [
      <Layout.Body
        key={1}
        errorInfo={this.state.errorInfo}
        loading={this.state.loading}
      >
        <p>Some text, some text, some text</p>
        <br />
        <Button onClick={this.evt.throwError}>Throw Error</Button>
        <br />
        <Button onClick={this.evt.loading}>Loading</Button>
      </Layout.Body>,
      <Layout.Footer key={2}>
        <p>I am Footer</p>
      </Layout.Footer>
    ]
  }

  renderHeaderRight() {
    if (this.state.tabs === 1) {
      if (this.state.ghostMode) {
        return (
          <a href="javascript:;" onClick={this.evt.ghostMode}>
            Normal Mode
          </a>
        )
      }
      else {
        return (
          <a href="javascript:;" onClick={this.evt.ghostMode}>
            Ghost Mode
          </a>
        )
      }
    }
    else {
      return null
    }
  }

  render() {
    return (
      <Layout className="view-layout">
        <Layout.Header
          title="Layout"
          onBackClick={this.evt.goBack}
          addonAfter={this.renderHeaderRight()}
          addonBottom={
            <Tabs onClick={this.evt.tabsClick} active={this.state.tabs}>
              <Tabs.Item value={1}>Layout.Header</Tabs.Item>
              <Tabs.Item value={2}>Layout.Body/Footer</Tabs.Item>
            </Tabs>
          }
        />

        {do {
          if (this.state.tabs === 1) {
            this.renderHeaders()
          }
          else if (this.state.tabs === 2) {
            this.renderBody()
          }
        }}

      </Layout>
    )
  }
}

export default View
