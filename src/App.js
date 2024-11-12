import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Matheus"/>
      <Pessoa nome="Matheus" idade="18" profissao="Padeiro"/>
    </div>
  );
}

export default App;
