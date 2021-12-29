import React from 'react';
import {Helmet} from "react-helmet";
import { Navbar } from './Navbar';
import styles from '../styles/portfolio.module.css'

export const Portafolio = () => {
  return (
  <>

  <Helmet>
                <meta charSet="utf-8" />
                <title>Portafolio | Daniel Murguia</title>
                
  </Helmet>

    <div className={styles.navbarPortfolio}>
      <Navbar />
    </div>

  </>

  )
}
