import React from 'react';
import {Helmet} from "react-helmet";
import { Navbar } from './Navbar';
import styles from '../styles/portfolio.module.css';
import consultaFitPage from '../assets/consultaFitGif.gif';
import calendarAppGif from '../assets/calendarAppGif.gif'


import { Footer } from './Footer';

export const Portafolio = () => {
  return (
  <>

  <Helmet>
                <meta charSet="utf-8" />
                <title>Portafolio | Daniel Murguia</title>
                
  </Helmet>

    

      <header>
        <div className={styles.navbarPortfolio}>
      <Navbar />
        </div>
      </header>     

 {/* Proyectos del portafolio */}

          <section className={styles.consultaBackground}>
   
              
             <img className={styles.consultaGif} src={consultaFitPage} alt="Consulta Fit" />

             <h3 className='animate__animated animate__fadeInRight' id={styles.consultaTitle}>
            Consulta Fit
            </h3>


             <p className='animate__animated animate__fadeInRight' id={styles.consultaParagraph}>
              Cuando tienes una tienda en redes sociales, el siguiente paso es tener una página web en donde los clientes puedan ver, elegir y comprar los productos. Este proyecto, es justo llevar la tienda en línea a otro nivel. Un E - Commerce personalizado en donde existe la posibilidad que desde una cuenta de usuario, el administrador sea quien agregre, modifique o elimine productos.
             </p>

            

            </section>




      <section className={styles.calendarBackground} >

          
            <img className={styles.calendarGif} src={calendarAppGif} alt="Consulta Fit" />

            <h3 className='animate__animated animate__fadeInRight' id={styles.calendarAppTitle}>
            Calendar App
            </h3>


             <p className='animate__animated animate__fadeInRight' id={styles.calendarAppParagraph}>
              Este proyecto es una calendario-agenda, en donde los usuarios pueden calendarizar sus eventos, colocando una fecha inicial y una final para después verlos desplegados en la interfaz general, en el día, semana o mes actual. Tiene autenticación para cada usuario, por lo que cada usuario sólamente puede eliminar o modificar los eventos que fueron creados por él mismo.
             </p>
            

      </section>  


      <footer className={styles.portafolioFooter}>

      <Footer />

      </footer>

  </>

  )
}

