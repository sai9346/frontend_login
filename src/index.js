import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import './index.css';
import App from './App';

const container = document.getElementById('root');  // Get the root DOM node
const root = createRoot(container);  // Create the root for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
