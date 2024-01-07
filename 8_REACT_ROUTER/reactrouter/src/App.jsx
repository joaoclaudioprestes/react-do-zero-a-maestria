import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";


// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from './pages/Product';

function App() {
  return (
    <>
      <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
