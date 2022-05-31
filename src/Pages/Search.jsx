import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");

  const inputEvent = (e) => {
    const data = e.target.value;
    setImg(data);
  };
  return (
    <>
      <h1>Search Photos!!! </h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search anything.."
          value={img}
          onChange={inputEvent}
        />
      </div>
      {img === "" ? null : <Sresult name={img} />}
    </>
  );
};

export default Search;
