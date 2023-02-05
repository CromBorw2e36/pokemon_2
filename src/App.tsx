import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { PokeType } from './interface';
import PokemonCollection from './components/pokemonCollection'


// import pokemonCollection from './components/pokemonCollection'
interface PokemonType {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokeType[]>([]);
  useEffect(() => {
    const getPoke = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
      res.data.results.forEach(async (result: PokemonType) => {
        const Poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${result.name}`)
        console.log(Poke.data)

        await setPokemons((p) => [
          ...p,
          Poke.data
        ])
      })

    }
    getPoke();

  }, [])
  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection 
          pokemons = {pokemons}
        />
        <button>Tải thêm</button>
      </div>
    </div>
  )
}


export default App;
