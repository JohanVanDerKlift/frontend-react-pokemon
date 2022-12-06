import React, {useEffect, useState} from 'react';
import "./Card.css"
import axios from "axios";

function Card({url}) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const result = await axios.get(`${url}`);
        console.log(result.data);
        setPokemon(result.data);
      } catch (e) {
        console.error(e);
      }
    }

    if (url) {
      fetchPokemon();
    }

  }, [])

  return (
    <>
      {Object.keys(pokemon).length > 0 &&
        <article className="card-wrapper">
          <h2 className="name">{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt="" className="image"/>
          <p className="moves">Moves: {pokemon.moves.length}</p>
          <p className="weight">Weight: {pokemon.weight}</p>
          <p className="abilities">Abilities:</p>
          <ul>{pokemon.abilities.map((ability) => (
            <li key={ability.ability.name} className="ability">{ability.ability.name}</li>
          ))}</ul>
        </article>
      }
    </>
  );
}

export default Card;