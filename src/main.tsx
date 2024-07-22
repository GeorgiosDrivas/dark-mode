import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './styles/style.css'

const container = document.getElementById("root");

if(container){
  const root = createRoot(container);
  
  root.render(
    <App />
  );
} else {
  console.error("Root element not found");
}