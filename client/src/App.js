import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ContainerUsuarios from "./components/containerUsuarios/ContainerUsuarios";
import ContainerAltas from './components/containerAltas/ContainerAltas'
import Anonymous from './context/Anonymous'
import {Login, Instalador, Home, Controls , AltasForm, BajasForm , Call , Gastos, PedidoAlta} from './pages/'
import ContainerBajas from "./components/containerBajas/ContainerBajas";


function App() {
  return (
    <Anonymous>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/instalador" element={<Instalador/>} />
        <Route path="/instalador/alta" element={<AltasForm/>} />
        <Route path="/instalador/baja" element={<BajasForm/>} />
        <Route path="/instalador/gastos" element={<Gastos/>} />
        <Route path="/dashboard" element={<Controls/>} />
        <Route path="/dashboard/usuarios" element={<ContainerUsuarios/>} />
        <Route path="/call" element={<Call/>} />
        <Route path="/altas" element={<ContainerAltas/>} />
        <Route path="/bajas" element={<ContainerBajas/>} />
        <Route path="/pedido/altas" element={<PedidoAlta/>} />
      </Routes>
      </BrowserRouter>
    </Anonymous>
  );
}

export default App;
