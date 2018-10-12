import React, { Component } from 'react'
import axios from 'axios'
import EmployeeDetail from './components/employee-detail'
import styles from './index.module.css'

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      employees: [],
      employee: null
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(event) {
    const query = event.target.value
    this.setState({
      query
    })
    if (this.cancelSource) {
      this.cancelSource.cancel('')
    }
    this.cancelSource = axios.CancelToken.source()
    axios.post(
      '/search',
      { query },
      { cancelToken: this.cancelSource.token }
    ).then(({ data: { results: employees } }) => {
      this.setState({
        employees
      })
    })
  }
  onSelect(employee) {
    this.setState({
      employee
    })
  }
  render() {
    return (
      <article>
        <section className={styles.searchSection}>
          <input
            id="searchField"
            type="text"
            value={this.state.query}
            onChange={this.onChange}
            placeholder="Search and select an employee"
            className={styles.input}/>
            <ul className={styles.list}>
              {this.state.employees.map((employee, index) => (
                <li
                  id={`result-${index}`}
                  key={employee._id}
                  onClick={() => this.onSelect(employee)}
                  className={styles.listItem}>
                  {employee.name}
                </li>
              ))}
            </ul>
        </section>
        <section className={styles.resultSection}>
          {this.state.employee
            ? <EmployeeDetail {...this.state.employee} />
            : null}
        </section>
      </article>
    )
  }
}

export default SearchPage
