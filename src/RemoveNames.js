import React from "react";
import FavoriteNames from "./FavoriteNames";

const RemoveNames = ({ searchFilter, favNames, setFavNames }) => {
  const favNamesList = searchFilter.filter((baby) =>
    favNames.includes(baby.id)
  );
  const removeName = (id) =>
    setFavNames(favNames.filter((baby) => baby !== id));

  return (
    <div>
      <h3>Favorite Names:</h3>

      <ul>
        {favNamesList.map((baby) => (
          <li
            className={baby.sex === "f" ? "girlColor" : "boyColor"}
            key={baby.id}
          >
            <FavoriteNames baby={baby} onClickFunction={removeName} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemoveNames;
