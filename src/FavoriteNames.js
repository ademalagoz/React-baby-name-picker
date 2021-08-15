import React from "react";

const FavoriteNames = ({ baby, onClickFunction }) => {
  return (
    <div onClick={() => onClickFunction(baby.id)}>
      <span>{baby.name}</span>
    </div>
  );
};

export default FavoriteNames;
