import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import TranslatorPage from './pages/TranslatorPage';
import FaqPage from './pages/FaqPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/chatbot" component={ChatbotPage} />
        <Route path="/translator" component={TranslatorPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact component={LoginPage} />
      </Routes>
      </Router>
      );
}

export default App;
