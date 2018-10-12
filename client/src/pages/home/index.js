import React, { Component } from 'react'
import axios from 'axios'
import styles from './index.module.css'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      progress: null
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onChange(event) {
    this.setState({
      file: event.target.files[0]
    })
    console.log(event.target.files[0])
  }
  onSubmit(event) {
    event.preventDefault()
    const form = new FormData()
    form.append('data', this.state.file)
    axios.post('/import', form, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.lengthComputable) {
          this.setState({
            progress: progressEvent.loaded / progressEvent.total
          })
        }
      }
    }).then(() => {
      this.props.history.push('/search')
    })
  }
  render() {
    return (
      <form noValidate onSubmit={this.onSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            id="uploadField"
            type="file"
            accept=".csv"
            onChange={this.onChange}
            className={styles.fileInput} />
          <input
            type="text"
            readOnly
            value={(this.state.file && this.state.file.name) || ''}
            placeholder="Please click to select csv file to upload"
            className={styles.input} />
        </div>
        <button
          id="uploadButton"
          type="submit"
          className={styles.uploadButton}>
          Upload
        </button>
      </form>
    )
  }
}

export default HomePage
