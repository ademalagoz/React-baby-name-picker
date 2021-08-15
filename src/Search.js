import React, { useEffect, useRef } from "react";

const Search = ({ searchName, setSearchName }) => {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const searchHandle = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div>
      <form className="form-inline">
        <input
          ref={inputRef}
          value={searchName}
          onChange={searchHandle}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search a name"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Search;
