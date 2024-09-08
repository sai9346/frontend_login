import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importing your main App component
import './index.css'; // Importing a basic stylesheet

// Creating a root and rendering the App component inside the 'root' div in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
