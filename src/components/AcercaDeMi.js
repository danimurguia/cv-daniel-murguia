import React from 'react';
import {Helmet} from "react-helmet";
import { Navbar } from './Navbar';
import styles from '../styles/acercaDeMi.module.css';
import dm from '../assets/dm.jpg'
import { Footer } from './Footer';

export const AcercaDeMi = () => {


 // The Helmet npm packgage allows to change the title of the page (browser bar) depending of the component or name you want/need
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Acerca de mi | Daniel Murguia</title>
                
    </Helmet>
    <div className = {styles.navbarAcercaDeMi}> 

      <Navbar  />

    </div>

<div className={styles.prueba}>

    <img src={dm} alt='Daniel' />

</div>

<div>

    <Footer />

 </div>

    </>
    
  )
}
