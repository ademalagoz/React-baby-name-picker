import React from "react";
import data from "./data.json";
//sort name
//diffrent sex color

const Home = () => {
  let sortName = data.sort((a, b) => {
    return b.name > a.name ? -1 : 1;
  });
  //   const pickColor=()=>{
  //       if(sortName.sex==='f')
  //   }

  return (
    <div>
      {sortName.map((baby) => {
        return (
          <div>
            {baby.sex === "f"}
            {/* do pink bg style */}
            <p>{baby.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
