import "./App.css";
// Components
import FirstComponent from "./components/FirstComponents";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponents from "./components/MyComponents";
import Events from "./components/Events";
import Challenge from './components/Challenge';

function App() {
  return (
    <>
      <h1>Fundamentos de React</h1>
      <MyComponents />
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />

      <MyComponents />
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </>
  );
}

export default App;
