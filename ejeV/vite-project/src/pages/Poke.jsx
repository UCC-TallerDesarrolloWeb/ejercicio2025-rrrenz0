import { useState, useEffect } from "react";
import PokeCard from "../components/PokeCard";
import "../styles/Pokemon.scss";

// https://www.youtube.com/watch?v=y9VisC_upk4
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


const Poke = () => {
    const [pokemonData, setPokemonData] = useState([]);

    const fetchPokemons = async (id) => {
        try{
            const response = await fetch(`${BASE_URL}${id}`)
            const data = await response.json();
            //setPokemonData(await data);
            setPokemonData((prev) => [...prev, data]); //Arreglo que acumula
            console.log(pokemonData);
        }catch(error){
            console.error('Error en el fetch de pokemones')
        }
    }

    useEffect(() =>  { //Se llama una sola vez cuando la página carga
        fetchAllPokemons()
    },[]);

    const fetchAllPokemons = () => {
        for(let i=1;i<20;i++){
            fetchPokemons(i);
        }
    }

    
    if(!pokemonData){
        return (<h1>Cargando pokemon...</h1>)
    }

    return(
        <>
            <div className="pokedex">
                {pokemonData.map((pokemon, index) => (
                    <PokeCard pokemonData={pokemon} key={index} />
                ))}
            </div>
        </>
    )
    
}

export default Poke;