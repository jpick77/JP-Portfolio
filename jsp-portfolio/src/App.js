import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact'
import Project from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    
    </div>
  )
}

export default App;
