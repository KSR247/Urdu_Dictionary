import React from "react";
import Card from "./Card";

const CardList = ({ Dictionary }) => {
  const cardArray = Dictionary.map((search, i) => {
    return (
      <Card
        key={i}
        id={Dictionary[0].id}
        word={Dictionary[i].word}
        meaning={Dictionary[i].meaning}
        url={Dictionary[i].url}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
