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
    this.setState({
      progress: 0
    })
    const form = new FormData()
    form.append('data', this.state.file)
    axios.post('/import', form, {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent)
        if (progressEvent.lengthComputable) {
          this.setState({
            progress: progressEvent.loaded / progressEvent.total
          })
        }
      }
    }).then(() => {
      this.props.history.push('/search')
    }).catch(() => {
      this.setState({
        progress: null
      })
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
            disabled={this.state.progress !== null}
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
          disabled={!this.state.file || this.state.progress !== null}
          className={styles.uploadButton}>
          <span
            className={styles.progress}
            style={{ width: `${100 * (this.state.progress || 0)}%` }} />
          <span className={styles.uploadText}>
            {this.state.progress ? (
              this.state.progress === 1
              ? 'Saving In DB...'
              : `Uploading... ${Math.floor(100 * this.state.progress)}%`
            ) : 'Upload'}
          </span>
        </button>
      </form>
    )
  }
}

export default HomePage
