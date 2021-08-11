import React, { useState } from "react";
import data from "./data.json";

const Home = () => {
  const [searchName, setSearchName] = useState("");

  const sortName = data.sort((a, b) => {
    return b.name > a.name ? -1 : 1;
  });

  const searchHandle = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div>
      <form className="form-inline">
        <input
          value={searchName}
          onChange={searchHandle}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search a name"
          aria-label="Search"
        />
      </form>
      <ul>
        {sortName
          .filter((baby) =>
            baby.name.toUpperCase().includes(searchName.toUpperCase())
          )
          .map((baby) => (
            <li className={baby.sex === "f" ? "girlColor" : "boyColor"} key={baby.id}>
              {baby.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
