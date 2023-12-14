import './App.css';
import Flor from "./assets/plum-blossoms-7942343_1280.jpg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <ManageData />

      <ListRender />

      {/*Imagem em public*/}
      <img src="/dom-8429773_1280.jpg" alt="Paisagem" />
      
      {/*Imagem em src/assets*/}
      <img src={Flor} alt="" />
    </div>
  );
}

export default App;
