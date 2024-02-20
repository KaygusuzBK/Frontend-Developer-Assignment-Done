import React from "react";
import classNames from "classnames";

function CountryCard({ country, selectedColor, selectedCardId, OnClickCard }) {
  return (
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
      <div className="flex flex-col justify-start items-start p-2">
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
  );
}

export default CountryCard;
