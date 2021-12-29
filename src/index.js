import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter
} from "react-router-dom";
import { AppRouter } from './routes/AppRouter';



ReactDOM.render(
<BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
    
  document.getElementById('root')
);
