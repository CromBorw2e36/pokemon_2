import React from 'react'
import './pokemon.css'
interface Props {
    id: number;
    name: string;
    image: string;
}

const pokemonList: React.FC<Props> = (props) => {
    const { id, name, image } = props
    return (
        <section className="pokemon-list-container">
            <p className="pokemon-name">{name}</p>
            <img src={image} alt={name} />
        </section>
    )
}

export default pokemonList