import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import Register from "./pages/Cadastro/Register";
import Clientes from "./pages/Cadastro/Clientes";
import Cliente from './pages/Cadastro/Cliente';

import Home from "./pages/Home";
import './App.css';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/cadastro/register" element={<Register />}></Route>
        <Route path="/cadastro/cliente" element={<Clientes />}></Route>
        <Route path="/cadastro/cliente/:id" element={<Cliente />}></Route>
      </Routes>
    </Router>
  )
}
