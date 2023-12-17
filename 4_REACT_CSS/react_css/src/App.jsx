import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from './components/Title';

function App() {
  const isAdmin = true;
  const redTitle = true;
  return (
    <>
      {/* CSS global */}
      <h1>React CSS</h1>

      {/* CSS Componente */}
      <MyComponent />
      <MyComponent />

      {/* CSS Inline */}
      <p
        style={{
          color: "#fff",
          background: "purple",
          padding: "5px",
          marginTop: "10px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Este elemento foi estilizando de forma inline!
      </p>

      {/* CSS Componente */}
      <h2
        style={
          isAdmin === true
            ? {
                color: "#fff",
                background: "green",
                padding: "5px",
                marginTop: "10px",
                borderRadius: "5px",
                textAlign: "center",
              }
            : {
                color: "#fff",
                background: "red",
                padding: "5px",
                marginTop: "10px",
                borderRadius: "5px",
                textAlign: "center",
              }
        }
      >
        {isAdmin === true ? "É administrador" : "Não é Administrador"}
      </h2>

      {/* CSS -- Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este é um título vai ter classe dinâmica
      </h2>

      {/* CSS Modules */}
      <Title />
    </>
  );
}

export default App;
