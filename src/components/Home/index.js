import React from 'react'
import Pokemon from '../Pokemon'
import PokemonCard from '../PokemonCard'
import "./index.css"
import { useState ,useEffect} from 'react'
import axios from "axios"


const Home=()=> {
    const[pokemonData,setPokemonData]=useState([])
    const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const[nxtUrl,setNextUrl]=useState()
    const[prevUrl,setPreviousUrl]=useState()
    const[pokeData,setPokeData]=useState()
    const[isLoading,setLoading]=useState(true)


    const getPokemonData=async()=>{
           const response = await axios.get(url)
       console.log(response.data.results)
        setNextUrl(response.data.next)
        setPreviousUrl(response.data.previous)
       getPokemonDetailedInfo(response.data.results)
     setLoading(false)
     console.log(pokemonData)
    }

const getPokemonDetailedInfo=async(results)=>{
        results.map(async(item)=>{
        //console.log(item.url)
        const result = await axios.get(item.url)
       // console.log(result.data)
       setPokemonData(state=>{
        state=[...state,result.data]
        state.sort((a,b)=>{return a.id - b.id})
        return state;
       })
        })
}


    useEffect(()=>{
        getPokemonData();
    },[url])


  return (
    <div className="home-container">
       <div className="pokemon-container">
      
     {isLoading ? (
         "Loading Data..."
        ) : (
          <Pokemon data={pokemonData} renderPokemon={pokeItem=>setPokeData(pokeItem)} />
        )
        }  
      
        
        <div className="button-container">
      {prevUrl &&  <button type="button" className="pokemon-button" onClick={()=>{
          setPokemonData([]) 
          setUrl(prevUrl)
          }}>Previous </button>}

        {nxtUrl &&  <button type="button" className="pokemon-button" onClick={()=>{
          setPokemonData([]) 
          setUrl(nxtUrl)
          }}> Next </button>}  
       
       
        </div>
       </div>
       <div className="pokemon-info-container">
            <PokemonCard data={pokeData} />
       </div>
    </div>
  )
}

export default Home