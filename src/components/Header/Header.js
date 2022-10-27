import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const onChangeId = (e)=>{
    props.setBuscaId(e.target.value)
  }
  const onChangeNome = (e) =>{
    props.setBuscaNome(e.target.value)
  }
  const onChangeOrdenacao = (e) =>{
   props.setordenaAlfabeto(e.target.value)    
  }
  const onChangeBuscaTipo = (e) =>{
    props.setBuscaTipo(e.target.value)
  }
  return (
    <Container>
      <input type="number" 
      placeholder="Buscar por id"
      value={props.buscaId}
      onChange={onChangeId}
      />
      <input type="text" 
      placeholder="Buscar por nome"
      value={props.buscaNome}
      onChange={onChangeNome}
       />
      <select value={props.ordenaAlfabeto} 
      onChange={onChangeOrdenacao}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select 
      name="tipo" 
      id="tipo"
      value={props.buscaTipo}
      onChange={onChangeBuscaTipo}
      >
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
