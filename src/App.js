import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/card/Card";
import Pagination from "./components/pagination/Pagination";
import logo from "./assets/images/logo.png"

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [nextPageUrl, setNextPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      setLoading(true);
      try {
        setError(false);
        const result = await axios.get(currentPageUrl, {
          signal: controller.signal,
        });
        console.log(result.data.results);
        setNextPageUrl(result.data.next);
        setPrevPageUrl(result.data.previous);
        setPokemon(result.data.results);
      } catch (e) {
        console.error(e);
        setError(true);
      }
      setLoading(false);
    }

    fetchData();

    return function cleanup() {
      controller.abort();
    }
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <>
      <header className="header">
        <img src={logo} alt="Pokemon Logo"/>
      </header>
      
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />

      {loading && <span>Loading...</span>}
      {error && <span>404 not found</span>}
      <div className="container">
        {pokemon.map((item) => (
          <Card
            key={item.name}
            url={item.url}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;
