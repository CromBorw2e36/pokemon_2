import React from 'react'
import { PokeType } from '../interface'
import PokemonList from './pokemonList'
interface Props{
  pokemons: PokeType[],
}

const pokemonCollection: React.FC <Props> = (props) => {
  const {pokemons} = props;

  return (
    <section className="collection-container">
      {
        pokemons.map((item, index) => (
          <div>
            <PokemonList
            id={item.id}
            name={item.name}
            image={item.sprites.front_default}
            />
          </div>
        ))
      }
    </section>
  )
}

export default pokemonCollection