import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/card/Card";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
        console.log(result.data);
        setPokemon(result.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchdata();
  }, [])


  return (
    <>
      {Object.keys(pokemon).length > 0 &&
        <Card
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          moves={pokemon.moves.length}
          weight={pokemon.weight}
          abilities={pokemon.abilities}
        ></Card>
      }
    </>
  );
}

export default App;
