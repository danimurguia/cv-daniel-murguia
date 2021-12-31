import React from 'react';
import {Helmet} from "react-helmet";
import { Navbar } from './Navbar';
import styles from '../styles/acercaDeMi.module.css';
import dm from '../assets/dm.jpg'
import { Footer } from './Footer';
import {  Card, CardBody, CardText, CardTitle } from 'reactstrap';




export const AcercaDeMi = () => {


 // The Helmet npm packgage allows to change the title of the page (browser bar) depending of the component or name you want/need
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Acerca de mí | Daniel Murguia</title>
                
    </Helmet>
    <div className = {styles.navbarAcercaDeMi}> 

      <Navbar  />

    </div>

<div className={styles.imgAboutMe}>

    <img className='animate__animated animate__fadeInBottomLeft' src={dm} alt='Daniel' />

    <div className={`animate__animated animate__fadeInBottomRight ${styles.textAbouMe}`}>
  <Card className={styles.card}
  >
    <CardBody>
      <CardTitle tag="h5">
        Acerca de mí
      </CardTitle>

      <CardText>
        Soy una persona que disfruta de solucionar problemas y ayudar a la gente a cubrir sus necesidades, y qué mejor si es uilizando la tecnología.
        <br/><br/>
        Tengo formación académica como Ingeniero Biomédico y tuve un par de años de experiencia coadyuvando a pacientes y profesionales de la salud a través de la tecnología médica, pero desde que me sumergí en el mundo de la programación me sentí totalmente atraído y apasionado por saber y aprender más de esto, así que decidí seguir resolviendo cosas, pero ahora desde otra trinchera, la del mundo de las Tecnologías de la Información y el Desarrollo Web / Software, por lo que me convertí en Desarrollador Full Stack. 
        <br/><br/>
        Ha sido un camino con muchos retos y aprendizajes a pasos gigantes, pero siempre con objetivos bien claros y con la disciplina de siempre conseguirlos, sin importar las circunstancias.
        Estoy muy feliz de haber tomado éste rol y espero poder seguir aportartando tanto como la sociedad y la vida me lo permitan.
        <br/><br/>
        <span className={styles.despedidaAboutMe}>
          Sinceramente, 
        </span>
        <br/>
          <span className={styles.despedidaAboutMe}>
          Daniel Murguia 
          </span>

      </CardText>
      
    </CardBody>
  </Card>
</div>    

</div>


<br/> <br/> 
<div className={styles.tecnosAboutMe}>
  <h3>
  Con éstas tecnologías y herramientas he trabajado hasta ahora
  </h3>

  <br/> <br/> 
  
  <div className="container">
  <div className="row">
    <div className="col">
      <img  src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt='JavaScript' /> 
      <h5>JavaScript</h5> 
      <img  src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='HTML'/>
      <h5>HTML</h5>
      <img src="https://img.icons8.com/color/48/000000/css3.png" alt='CSS'/>
      <h5>CSS</h5>
      <img src="https://img.icons8.com/color/48/000000/react-native.png" alt='React'/>
      <h5>React</h5>
      <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='Bootstrap'/>
      <h5>Bootstrap</h5>
    </div>

  <div className="col">
      <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" alt='JAVA'/>
      <h5>JAVA</h5> 
      <img src="https://img.icons8.com/material-outlined/48/000000/mysql-logo.png" alt='MySQL'/>
      <h5>MySQL</h5>
      <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt='MongoDB'/>
      <h5>MongoDB</h5>
      <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='Node.js'/>
      <h5>Node.js</h5>
      <img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt='Express.js'/>
      <h5>Express.js</h5>
  </div>

    <div className="col">
      <img src="https://img.icons8.com/color/48/000000/java-web-token.png" alt='JWT'/>
      <h5>JWT</h5> 
      <img src="https://img.icons8.com/fluency/48/000000/github.png" alt='GitHub'/>
      <h5>GitHub</h5>
      <img src="https://img.icons8.com/color/48/000000/npm.png" alt='NPM'/>
      <h5>NPM</h5>
      <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png" alt='Postman'/>
      <h5>Postman</h5>
      <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-shadow-tal-revivo.png" alt='Jest'/>
      <h5>Jest</h5>
    </div>
  </div>
</div>
  
</div>


<div className={styles.acercaDeMiFooter}>

    <Footer />

 </div>

    </>
    
  )
}
