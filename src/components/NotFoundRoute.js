import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/notFound.module.css'

export const NotFoundRoute = () => {
  return (
    <>

    <div className={styles.allPage}>
      <h1 className='ms-5'>Sorry, this URL doesn't match. Try again with another, please </h1>
    </div>
    
    <div className='ms-5'>

    <Link to='/' >Back to Home Page</Link>

    </div>

    </>
  )
}
