import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import data from "./data.json";
import Search from "./Search";
import Select from "./Select";

function App() {
  const [searchName, setSearchName] = useState("");

  const searchFilter = data
    .sort((a, b) => (b.name > a.name ? -1 : 1))
    .filter((baby) =>
      baby.name.toUpperCase().includes(searchName.toUpperCase())
    );
  return (
    <div className="App">
      <Search searchName={searchName} setSearchName={setSearchName} />
      <Select searchFilter={searchFilter} />
    </div>
  );
}

export default App;
