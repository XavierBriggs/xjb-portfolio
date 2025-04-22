import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './components/styles/Footer.css';
import './components/styles/MainNavbar.css'
import './components/styles/Navbar.css'
import './pages/styles/Project.css';
import './pages/styles/About.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

