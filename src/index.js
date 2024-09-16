import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the new import
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
