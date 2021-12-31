import React from 'react';
import { CvApp } from '../CvApp';
import { Routes, Route} from "react-router-dom";
import { AcercaDeMi } from '../components/AcercaDeMi';
import { Portafolio } from '../components/Portafolio';
import { NotFoundRoute } from '../components/NotFoundRoute';



export const AppRouter = () => {
  return (
    <div>
      
      <Routes>

        <Route path="/" element={<CvApp />} />
        <Route path="acerca" element={<AcercaDeMi />} />
        <Route path="portafolio" element={<Portafolio />} />
        <Route path="*" element={<NotFoundRoute />} />
       
      </Routes>

      
    </div>
  )
}
