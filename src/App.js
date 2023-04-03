import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/contact/index';
import Project from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      
      <Router>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App;
