import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Chief Usability Technician</title>
        <meta property="og:title" content="Chief Usability Technician" />
      </Helmet>
    </div>
  )
}

export default Home
