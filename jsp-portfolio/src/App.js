import './App.scss';
import { Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App;
