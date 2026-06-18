import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav-demo" element={<Footer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
