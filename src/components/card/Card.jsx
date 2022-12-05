import React from 'react';
import "./Card.css"

function Card({name, image, moves, weight, abilities}) {
  return (
    <article className="card-wrapper">
      <h2 className="name">{name}</h2>
      <img src={image} alt="" className="image"/>
      <p className="moves">Moves: {moves}</p>
      <p className="weight">Weight: {weight}</p>
      <p className="abilities">Abilities:</p>
      <ul>{abilities.map((ability) => (
        <li key={ability.ability.name} className="ability">{ability.ability.name}</li>
      ))}</ul>
    </article>
  );
}

export default Card;