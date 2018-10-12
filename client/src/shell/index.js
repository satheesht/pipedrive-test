import React, { Component } from 'react'
import Header from './header'
import Page from './page'

class Shell extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Page />
      </React.Fragment>
    )
  }
}

export default Shell
