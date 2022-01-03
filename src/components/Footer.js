import React from 'react';


export const Footer = () => {
  return (
    <>
      <footer className='text-center '>
  {/* <!-- Grid container --> */}
  <div className="container pt-2">
    {/* <!-- Section: Social media --> */}
    <section className="mb-2">
      

      {/* <!-- WhatsApp --> */}
      <a
        className="btn btn-link btn-floating btn-lg  m-1"
        href="https://wa.me/+523328102969"
        type="button"
        target="_blank"
        rel="noreferrer"
        ><i className="bi bi-whatsapp"></i>
        </a>
      {/* <!-- Mail --> */}
      <a
        className="btn btn-link btn-floating btn-lg  m-1"
        href="mailto:daniel.al.murguia@gmail.com"
        type="button"
        target="_blank"
        rel="noreferrer"
        ><i className="bi bi-envelope-fill"></i>
        </a>
{/* 
      
      {/* <!-- Linkedin --> */}
      <a
        className="btn btn-link btn-floating btn-lg  m-1"
        href="https://www.linkedin.com/in/daniel-murguia/"
        type="button"
        target="_blank"
        rel="noreferrer"
        ><i className="bi bi-linkedin"></i>
        </a>
      {/* <!-- Github --> */}
      <a
        className="btn btn-link btn-floating btn-lg  m-1"
        href="https://github.com/danimurguia"
        type="button"
        target="_blank"
        rel="noreferrer"
        > <i className="bi bi-github"></i>
      </a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}
   
  {/* <!-- Copyright --> */}
  <div className='text-center p-1'>  
        © 2022 | Daniel Murguia
    
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </>
  )
}
