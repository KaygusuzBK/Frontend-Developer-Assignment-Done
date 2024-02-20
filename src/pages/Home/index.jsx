import React, { useState, useEffect } from "react";
import { getCountries } from "../../services";
import SearchBar from "../../components/SearchBar";
import CountryList from "../List/index.jsx";
import LoadingSpinner from "../../components/LoadingSpinner";

function Home() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [value, setValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries().then((response) => {
      const fetchedCountries = response.data.countries;
      setCountries(fetchedCountries);
      setFilteredCountries(fetchedCountries);
      setTotalPages(Math.ceil(fetchedCountries.length / 12));
      setLoading(false);
    });
  }, []);

  const handleValueChange = (value) => {
    setValue(value);
    setSelectedCardId(null);
  };

  const getFilteredCountries = () => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  useEffect(() => {
    setFilteredCountries(getFilteredCountries());
  }, [value, countries]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredCountries.length / 12));
  }, [filteredCountries]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center m-7">
          <SearchBar value={handleValueChange} />
        </div>
        <div className="flex-col justify-center m-7">
          {loading ? (
            <LoadingSpinner /> //
          ) : (
            <CountryList
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              countries={filteredCountries}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
