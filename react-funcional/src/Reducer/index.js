import React, { useState, useEffect } from "react";

import useStore from "./somaReducer";

function ReducerHook() {

  const [ numero, setNumero ] = useState('')
  const [ segundoNumero, setSegundoNumero ] = useState('')

  const [store, dispatch] = useStore()
  
    const somar = () => {
        const numeroInt = parseInt(numero)
        const segNumeroInt = parseInt(segundoNumero)

        console.log('dispachando a action')  
        dispatch({
            type: 'SOMA',
            payload: numeroInt + segNumeroInt
        })
    }

    const subtrair = () => {
        const numeroInt = parseInt(numero)
        const segNumeroInt = parseInt(segundoNumero)
        
        dispatch({
            type: 'SUBTRACAO',
            payload: numeroInt - segNumeroInt
        })
    }

    const dividir = () => {
        const numeroInt = parseInt(numero)
        const segNumeroInt = parseInt(segundoNumero)
        
        dispatch({
            type: 'DIVIDIR',
            payload: numeroInt / segNumeroInt
        })
    }

    const multiplicar = () => {
        const numeroInt = parseInt(numero)
        const segNumeroInt = parseInt(segundoNumero)
        
        dispatch({
            type: 'MULTIPLICAR',
            payload: numeroInt * segNumeroInt
        })
    }

  return (
    <div>
      Número 1:<br />
      <input type="text" value={numero} 
                         onChange={e => setNumero(e.target.value)} /><br />

      Número 2:<br />
      <input type="text" value={segundoNumero} 
                         onChange={e => setSegundoNumero(e.target.value)} /><br />

      <button onClick={somar}>Somar</button> <br/>
      <button onClick={subtrair}>Subtrair</button> <br/>
      <button onClick={dividir}>Dividir</button> <br/>
      <button onClick={multiplicar}>Multiplicar</button> <br/>
      Resultado:<br />
      <input type="text" value={store.resultado} readOnly /><br />
    </div>
  );
}

export default ReducerHook;
