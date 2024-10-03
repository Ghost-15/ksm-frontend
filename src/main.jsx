import React from 'react'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AppProvider} from "./auth/AppProvider.js";

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
    <React.StrictMode>
      <BrowserRouter>
          <AppProvider>
              <Routes>
                  <Route path="/*" element={<App/>} />
              </Routes>
          </AppProvider>
      </BrowserRouter>
  </React.StrictMode>
)
