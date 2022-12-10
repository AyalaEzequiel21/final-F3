import React from 'react';
import ReactDOM from 'react-dom/client';
import './Sass/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Context from './Components/utils/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Context>
);


