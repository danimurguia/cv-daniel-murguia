import React from 'react';
import {Helmet} from "react-helmet";
import { Navbar } from './components/Navbar';
import styles from './styles/cvApp.module.css';
import 'animate.css';
import { Footer } from './components/Footer';





export const CvApp = () => {
 
  
  const currentScrollPos = window.pageYOffset;
  let navbarClass = styles.navbarTransparent;
  if(currentScrollPos > 0) {
    navbarClass = styles.navbarColored;
  }
 
// The Helmet npm packgage allows to change the title of the page (browser bar) depending of the component or name you want/need
  return (
    
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Daniel Murguia</title>
                
    </Helmet>
    <div className= {`${styles.home} ${styles.navbarLink} ${navbarClass}`} >
      <Navbar  />

      <div className={styles.phrase}>

      <h1 className='animate__animated animate__fadeInLeft' >
    El éxito... es la suma de pequeños esfuerzos repetidos día a día
    </h1> 
    
    <h2 className='animate__animated animate__fadeInRight' >
    <br/> <br/> - Robert Collier
    </h2>

      <a 
    className={styles.buttonSurprise}
    href= 'https://theuselessweb.com/'
    target='blank'>
       ¡No me des click! 
  
       </a>

      </div>

      
      <footer className={styles.backColor} >
      <Footer />
      </footer>
  
    </div>

   
  
   </>
  )
}
