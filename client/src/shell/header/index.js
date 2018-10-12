import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'

class Header extends Component {
  render() {
    const pages = [
      { url: '/', title: 'Home', exact: true },
      { url: '/search', title: 'Search', exact: false }
    ]
    return (
      <header>
        <nav className={styles.container}>
          <ul className={styles.pagesList}>
            {pages.map(page => (
              <li key={page.url} className={styles.pageItem}>
                <NavLink
                  to={page.url}
                  exact={page.exact}
                  className={styles.link}
                  activeClassName={styles.activeLink}>
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
