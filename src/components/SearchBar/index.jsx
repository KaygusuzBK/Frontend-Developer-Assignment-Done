import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function SearchBar({ value }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const handleInputChange = () => {
    const value = inputRef.current.value;
    setInputValue(value);
  };

  useEffect(() => {
    value(inputValue); // Değişikliği üst bileşene iletir (props)
  }, [inputValue, value]);

  return (
    <input
      ref={inputRef}
      className={classNames(
        "p-2 border-2 border-gray-400 rounded-full w-1/4 text-center bg-[#181a1b] text-white",
        inputValue.length > 0 ? "border-green-500" : "border-red-500"
      )}
      type="text"
      placeholder="Search..."
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

SearchBar.defaultProps = {
  value: () => {},
};

export default SearchBar;
