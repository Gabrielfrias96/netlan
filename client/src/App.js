import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ContainerUsuarios from "./components/containerUsuarios/ContainerUsuarios";
import Anonymous from './context/Anonymous'
import {Login, Instalador, Home, Controls , AltasForm, BajasForm} from './pages/'


function App() {
  return (
    <Anonymous>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/instalador" element={<Instalador/>} />
        <Route path="/dashboard" element={<Controls/>} />
        <Route path="/dashboard/usuarios" element={<ContainerUsuarios/>} />
        <Route path="/instalador/alta" element={<AltasForm/>} />
        <Route path="/instalador/baja" element={<BajasForm/>} />
      </Routes>
      </BrowserRouter>
    </Anonymous>
  );
}

export default App;
