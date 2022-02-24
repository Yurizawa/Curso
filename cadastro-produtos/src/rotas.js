import React from "react";

import { Routes, Route } from 'react-router-dom';

import Home from "./Views/Home";
import CadastroProduto from "./Views/produtos/cadastro";
import ConsultaProdutos from "./Views/produtos/consulta";


export default () => {
    return (      
        <Routes>
            <Route  path="/cadastro-produtos" element={<CadastroProduto/>} />
            <Route  path="/cadastro-produtos/:sku" element={<CadastroProduto/>} />
            <Route  path="/consulta-produtos" element={<ConsultaProdutos/>} />
            <Route  path="/" element={<Home/>} />
        </Routes>  
    )
}
