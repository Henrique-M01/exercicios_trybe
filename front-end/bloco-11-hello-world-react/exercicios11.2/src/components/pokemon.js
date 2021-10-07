import React from "react";
import pokemons from "../data";

class Pokemon extends React.Component {
    render() {
        return (
            pokemons.map(pokemon => (
                <div key={pokemon.id}>
                    <h1>{pokemon.name}</h1>
                    <image src={pokemon.image} alt={pokemon.name}></image>
                    <p>Tipo: {pokemon.type}</p>
                    <p>Peso médio: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
                </div>
            ))
        );
    }
}

export default Pokemon;