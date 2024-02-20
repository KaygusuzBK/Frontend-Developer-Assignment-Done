import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function PaginationSelect({ currentPage, totalPages, handlePageChange }) {
  const [isMobileOrMd, setIsMobileOrMd] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrMd(window.innerWidth < 1024); // Eğer ekran boyutu 1024px'den küçükse true, değilse false
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []); // Sadece ilk render'da çalışır

  return (
    <>
      {isMobileOrMd ? (
        <select
          className="p-2 m-2 rounded-lg bg-[#181a1b] text-white border hover:bg-white hover:text-black font-bold"
          value={currentPage}
          onChange={(e) => handlePageChange(Number(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <option key={page} value={page}>
                {page}
              </option>
            )
          )}
        </select>
      ) : (
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`p-2 rounded-lg border w-10 h-10 ${
                  currentPage === page
                    ? "bg-[#181a1b] text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}
    </>
  );
}

PaginationSelect.defaultProps = { currentPage: 1, totalPages: 0 };

PaginationSelect.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default PaginationSelect;
