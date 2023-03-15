import React from "react";
import "./index.css";
const PokemonCard = (props) => {
  const { data } = props;
  console.log("iside poke card");
  console.log(data);
  const isActive= data===undefined
  console.log(isActive)

  return (
    isActive ? "" : (
      <div className="each-pokemon-info">
      <h1 className="pokemon-name">{data.name}</h1>
      <img
        src={data.sprites.front_default}
        alt="pokemon"
        className="resize-logo"
      />
      <ul className="info-1">
        {data.abilities.map((each) => {
          return <h1 key={each.ability.name} className="ability">{each.ability.name}</h1>;
        })}
      </ul>
      <ul className="info-2">
        {data.stats.map((each) => {
          return (
            <h1 key={each.stat.name} className="stat">
              {each.stat.name}:{each.base_stat}
            </h1>
          );
        })}
      </ul>
    </div>
    )
  );
};

export default PokemonCard;
