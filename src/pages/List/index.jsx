import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function CountryList({ currentPage, setCurrentPage, totalPages, countries }) {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (selectedCardId === null && countries.length > 0) {
      const startIndex = (currentPage - 1) * 12;
      const endIndex = Math.min(startIndex + 12, countries.length);
      if (endIndex >= 10) {
        setSelectedCardId(countries[startIndex + 9].code);
      } else {
        setSelectedCardId(countries[endIndex - 1].code);
      }
    }
  }, [currentPage, countries]);

  useEffect(() => {
    setSelectedColor(randomColor());
  }, [selectedCardId]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const randomColor = () => {
    const colors = [
      "bg-red-700",
      "bg-blue-700",
      "bg-green-700",
      "bg-yellow-700",
      "bg-purple-700",
      "bg-pink-700",
      "bg-indigo-700",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const OnClickCard = (id) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  const renderCountries = () => {
    const startIndex = (currentPage - 1) * 12;
    const endIndex = Math.min(startIndex + 12, countries.length);
    const renderedCountries = countries.slice(startIndex, endIndex).map(
      (country, index) => (
        console.log(country),
        (
          <div
            onClick={() => OnClickCard(country.code)}
            id={country.code}
            className={classNames(
              "flex flex-col justify-center items-center text-white rounded-lg shadow-md p-4 m-2 transition duration-500 ease-in-out transform hover:scale-105",
              {
                [selectedColor]: selectedCardId === country.code,
                "bg-gray-600": selectedCardId !== country.code,
              }
            )}
            key={country.code}
          >
            <img
              className="h-36 w-60 p-2 object-cover rounded-lg shadow-md border-2 border-gray-200"
              src={`https://flagpedia.net/data/flags/w580/${country.code.toLowerCase()}.webp`}
              alt={country.name}
            />
            <div className="flex flex-col justify-center items-center p-2">
              <div className="font-semibold mt-2 xl:text-md lg:text-sm md:text-sm sm:text-xs">
                Country: {country.name} ({country.code})
              </div>
              <div className="font-semibold mt-2 xl:text-md lg:text-sm md:text-sm sm:text-xs">
                Capital: <span className="font-bold">{country.capital}</span>
              </div>
              <div className="font-semibold mt-2 xl:text-md lg:text-sm md:text-sm sm:text-xs">
                {country.languages.map((language, index) => (
                  <span key={index} className="font-bold">
                    {index === 0 ? "Language: " : ""}
                    {language.name}
                    {index !== country.languages.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      )
    );

    return renderedCountries;
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <div
          to={`/page/${i}`}
          key={i}
          onClick={() => handlePageChange(i)}
          className={classNames(
            "cursor-pointer p-2 m-2 rounded-lg bg-[#181a1b] text-white border hover:bg-white hover:text-black font-bold w-8 h-8 flex justify-center items-center",
            {
              "bg-blue-500 text-white hover:bg-blue-700": currentPage === i,
            },
            {
              "bg-gray-600 text-black hover:bg-gray-400": currentPage !== i,
            }
          )}
        >
          {i}
        </div>
      );
    }
    return pages;
  };

  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {renderCountries()}
      </div>
      <div className="flex justify-center mt-4 items-center p-4">
        {renderPagination()}
      </div>
    </>
  );
}

CountryList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  countries: PropTypes.array.isRequired,
};

CountryList.defaultProps = {
  currentPage: 1,
  setCurrentPage: () => {},
  totalPages: 0,
  countries: [],
};

export default CountryList;
