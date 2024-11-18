<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//Layout

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

//Pages

import Home from './components/pages/Home';
import Normas from './components/pages/Normas';
import AnaliseCritica from './components/pages/AnaliseCritica';
=======
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
>>>>>>> f472ec48dbcddf491467b1f782c8815b83818393

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home/>} />
        <Route path="/normas" element={<Normas/>} />
        <Route path="/analisecritica" element={<AnaliseCritica/>} />
=======
        <Route path="/" element={<Home />}/>
        <Route path="/empresa" element={<Empresa />}/>
        <Route path="/contato" element={<Contato />}/>
>>>>>>> f472ec48dbcddf491467b1f782c8815b83818393
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
