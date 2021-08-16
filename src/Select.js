import React, { useState } from "react";
import data from "./data.json";
import AddNames from "./AddNames";
import RemoveNames from "./RemoveNames";

const Select = ({ searchFilter }) => {
  const [favName, setFavName] = useState(data);

  const selectHandle = (e) => {
    let targetValue = e.target.value;
    const selectValue = data.filter((baby) => baby.sex === targetValue);
    console.log(selectValue);
    targetValue !== "All" ? setFavName(selectValue) : setFavName(data);
  };

  return (
    <div>
      <select onChange={selectHandle}>
        <option value="All">All Names</option>
        <option value="f">Girl Names</option>
        <option value="m">Boy Names</option>
      </select>

      <RemoveNames
        searchFilter={searchFilter}
        favName={favName}
        setFavName={setFavName}
      />
      <AddNames
        searchFilter={searchFilter}
        favName={favName}
        setFavName={setFavName}
      />
    </div>
  );
};

export default Select;
