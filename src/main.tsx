import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './routers/Router';
// import App from './App.tsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import LayoutIndex from './layouts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutIndex>
        <Router />
      </LayoutIndex>
    </BrowserRouter>
  </React.StrictMode>
);
