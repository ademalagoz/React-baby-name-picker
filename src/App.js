import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import data from "./data.json";
import RemoveNames from "./RemoveNames";
import AddNames from "./AddNames";
import Search from "./Search";

function App() {
  const [searchName, setSearchName] = useState("");
  const [favNames, setFavNames] = useState([]);

  const searchFilter = data
    .sort((a, b) => (b.name > a.name ? -1 : 1))
    .filter((baby) =>
      baby.name.toUpperCase().includes(searchName.toUpperCase())
    );
  return (
    <div className="App">
      <Search searchName={searchName} setSearchName={setSearchName} />
      <RemoveNames
        searchFilter={searchFilter}
        favNames={favNames}
        setFavNames={setFavNames}
      />
      <AddNames
        searchFilter={searchFilter}
        favNames={favNames}
        setFavNames={setFavNames}
      />
    </div>
  );
}

export default App;
