import React, { useState, useEffect } from "react";
import CountryCard from "~/components/Card";
import PaginationSelect from "~/components/Pagenation";
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
    if (selectedCardId !== id) {
      setSelectedCardId(id);
    }
  };

  const renderCountries = () => {
    const startIndex = (currentPage - 1) * 12;
    const endIndex = Math.min(startIndex + 12, countries.length);
    const renderedCountries = countries
      .slice(startIndex, endIndex)
      .map((country) => (
        <CountryCard
          key={country.code}
          country={country}
          selectedColor={selectedColor}
          selectedCardId={selectedCardId}
          OnClickCard={OnClickCard}
        />
      ));

    return renderedCountries;
  };

  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {renderCountries()}
      </div>
      <div className="flex justify-center mt-4 items-center p-4">
        <PaginationSelect
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
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
