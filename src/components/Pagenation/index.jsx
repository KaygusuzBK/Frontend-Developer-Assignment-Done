import React from "react";
import PropTypes from "prop-types";

function PaginationSelect({ currentPage, totalPages, handlePageChange }) {
  return (
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
  );
}

PaginationSelect.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default PaginationSelect;
