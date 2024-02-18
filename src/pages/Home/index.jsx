import React, { useState, useEffect } from "react";
import { getCountries } from "../../services";
import SearchBar from "../../components/SearchBar";
import CountryList from "../List/index.jsx";

function Home() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [value, setValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    getCountries().then((response) => {
      const fetchedCountries = response.data.countries;
      setCountries(fetchedCountries);
      setFilteredCountries(fetchedCountries);
      setTotalPages(Math.ceil(fetchedCountries.length / 12));
    });
  }, []);

  const handleValueChange = (value) => {
    setValue(value);
    setSelectedCardId(null); // Her yeni arama yapıldığında seçili kartı sıfırla
  };

  const getFilteredCountries = () => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  useEffect(() => {
    setFilteredCountries(getFilteredCountries());
  }, [value, countries]); // "value" ve "countries" değiştiğinde filtreleme yap

  useEffect(() => {
    setTotalPages(Math.ceil(filteredCountries.length / 12));
  }, [filteredCountries]);

  useEffect(() => {
    if (filteredCountries.length > 0) {
      setCurrentPage(1);
      if (selectedCardId === null) {
        // Filtrelenmiş ülkelerden 10. elemanı seç
        setSelectedCardId(filteredCountries[9].code);
      }
    }
  }, [filteredCountries, selectedCardId]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center m-7">
          <SearchBar value={handleValueChange} />
        </div>
        <div className="flex-col justify-center m-7">
          <CountryList
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            countries={filteredCountries}
            selectedCardId={selectedCardId} // Seçili kartı props olarak geç
          />
        </div>
      </div>
    </>
  );
}

export default Home;
