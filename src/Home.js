import React, { useState } from "react";
import data from "./data.json";
//sort name
//diffrent sex color

const Home = () => {
  let sortName = data.sort((a, b) => {
    return b.name > a.name ? -1 : 1;
  });

  return (
    <div>
      {sortName.map((baby) => {
        return (
          <div>
            <p
              style={
                baby.sex === "f"
                  ? { background: "pink" }
                  : { background: "blue" }
              }
            >
              {baby.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
