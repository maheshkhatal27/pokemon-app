import "./index.css";

import React from 'react'



const Pokemon = (props) => {
  const{data,renderPokemon}=props
  //console.log("in pokemon")
  //console.log(data)
  return (
   <ul className="each-pokemon-container">
    {data.map(eachPokemon=>{
      return(
        <li key={eachPokemon.id} className="each-pokemon" onClick={()=>renderPokemon(eachPokemon)}>
        <h1>{eachPokemon.id}</h1>
        <h1  className="heading">{eachPokemon.name}</h1>
        <img src={eachPokemon.sprites.front_default} alt="pokemon-logo" className="logo" />
      </li>
      )
    })}
   </ul>
  )
}

export default Pokemon

