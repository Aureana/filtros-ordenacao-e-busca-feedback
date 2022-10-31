import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [buscaId,setBuscaId] = useState("")
  console.log("buscaId")
  const [buscaNome, setBuscaNome] = useState("")
  console.log("buscaNome")
  const [ordenaAlfabeto,setordenaAlfabeto]=useState("")
  console.log("OrdenarObjeto")
  const [buscaTipo, setBuscaTipo]= useState("")
  console.log("buscaTipo")


  return (
    <>
      <GlobalStyle />
      <Header
      buscaId={buscaId} 
      setBuscaId={setBuscaId}
      buscaNome={buscaNome}
      setBuscaNome={setBuscaNome}
      setordenaAlfabeto={setordenaAlfabeto}
      setBuscaTipo={setBuscaTipo}
      />
      <CardsContainer>        
        {pokemons
        //filtrar por Id
        .filter((pokemon) =>pokemon.id.includes(buscaId)) /* console.log(pokemon)*/
         //filtrar por nome
        .filter((pokemon) =>pokemon.name.english.toLowerCase().includes(buscaNome))
          // nomes em ordem afalbetica crecente e decrescente 
         .sort((a,b)=>{
          if(ordenaAlfabeto === "crescente"){
            if(a.name.english < b.name.english){
              return-1
            }else{
              return 1
            }
            
          }else if(ordenaAlfabeto === "decrescente"){
            if(a.name.english < b.name.english){
              return 1
            }else{
              return -1
            }
         }
        })
        .filter((pokemon)=> buscaTipo? pokemon.type.includes(buscaTipo) : pokemon)
      
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
   })}
      </CardsContainer>
    </>
  );
}

export default App;
