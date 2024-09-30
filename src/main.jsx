import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AppProvider} from "./auth/AppProvider.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <AppProvider>
              <Routes>
                  <Route path="/*" element={<App/>} />
              </Routes>
          </AppProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
