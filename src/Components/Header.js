import React from "react";
import "./Components.css";

const Header = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="searchbox"
        type="search, text"
        placeholder="Search words"
        onChange={searchChange}
      />
    </div>
  );
};

export default Header;
