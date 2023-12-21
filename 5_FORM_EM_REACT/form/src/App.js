import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForms';

function App() {
  return (
    <div>
      <h1>Formulários</h1>
      <MyForm user={{name: "João", email: "joao@email.com"}}/>
    </div>
  );
}

export default App;
