import React, { Component } from 'react'
import styles from './index.module.css'

class EmployeeDetail extends Component {
  renderDetailItem(title, key) {
    return (
      <div className={styles.detailItem}>
        <span className={styles.detailTitle}>{title}:</span>
        {this.props[key]}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderDetailItem('ID', 'id')}
        {this.renderDetailItem('Name', 'name')}
        {this.renderDetailItem('Age', 'age')}
        {this.renderDetailItem('Address', 'address')}
        {this.renderDetailItem('Team', 'team')}
      </div>
    )
  }
}

export default EmployeeDetail
