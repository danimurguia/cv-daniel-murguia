import React from 'react';
import {Helmet} from "react-helmet";
import { Navbar } from './Navbar';
import styles from '../styles/contacto.module.css'

export const Contacto = () => {
  return (
    <>

    <Helmet>
                <meta charSet="utf-8" />
                <title>Contacto | Daniel Murguia</title>
                
    </Helmet>
    <div className={styles.navbarContacto}>
      <Navbar />
    </div>

    </>
  )

}
