import React, { Component } from 'react'
import styles from './index.module.css'

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }
  render() {
    return (
      <article>
        <section className={styles.searchSection}>
          <input
            type="text"
            value={this.state.query}
            placeholder="Search and select an employee"
            className={styles.input}/>
        </section>
        <section className={styles.resultSection}>
          <h1>Here is the results</h1>
        </section>
      </article>
    )
  }
}

export default SearchPage
