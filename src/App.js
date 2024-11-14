import logo from './logo.svg';
import './App.css';
import Condicional from './components/Condicional';
import ModalNorma from './components/norma/ModalNorma';

function App() {
  return (
    <div className="App">
      <ModalNorma/>
      <h1>Renderização Condicional</h1>
      <Condicional/>
    </div>
  );
}

export default App;
