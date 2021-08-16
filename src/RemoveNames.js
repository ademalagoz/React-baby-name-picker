import React from "react";
import FavoriteNames from "./FavoriteNames";

const RemoveNames = ({ searchFilter, favName, setFavName }) => {
  const favNamesList = searchFilter.filter((baby) => favName.includes(baby.id));
  const removeName = (id) => setFavName(favName.filter((baby) => baby !== id));

  const clickFavorites = favNamesList.length > 0;
  return (
    <div>
      <h3>
        {clickFavorites ? "Favorite Names" : "Click on a name for favorites"}
      </h3>

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
