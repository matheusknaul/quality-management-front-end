import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//Layout

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

//Pages

import Home from './components/pages/Home';
import Normas from './components/pages/Normas';
import AnaliseCritica from './components/pages/AnaliseCritica';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/normas" element={<Normas/>} />
        <Route path="/analisecritica" element={<AnaliseCritica/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
