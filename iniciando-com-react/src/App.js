import React from "react";

function App ( props ){

  const modificarNome = event =>{
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = [ "Fulano", "Cicrano"]
    const comboBoxopcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxopcoes}
      </select>

    )
  }

    const MeuComboBox = () => criaComboBox()

    return (
      <>
        <input className="texto-centralizado" type="text" value={props.nome} onChange={modificarNome} />
        <h1>Hello {props.nome} sua idade é {props.idade} </h1>
        <MeuComboBox />
      </>
    )
}

export default App;