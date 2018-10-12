import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from 'pages/home'
import SearchPage from 'pages/search'
import styles from './index.module.css'

class Page extends Component {
  render() {
    return (
      <main className={styles.main}>
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route component={HomePage} />
        </Switch>
      </main>
    )
  }
}

export default Page
