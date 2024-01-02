import React from "react";
import SearchForm from "./SearchForm";
import { useState } from "react";

function DataPage({ name, dataHeader, dataFilter, tableDataHeaders, dataArr }) {
  const handleSearch = (query) => {
    console.log(`Выполнен поиск по запросу: ${query}`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(8);

  const pages = [
    { text: "<", style: "arrow" },
    { text: "1", style: currentPage === 1 ? "selected" : "normal" },
    { text: "2", style: currentPage === 2 ? "selected" : "normal" },
    { text: "3", style: currentPage === 3 ? "selected" : "normal" },
    { text: "...", style: "ellipsis" },
    { text: "40", style: currentPage === 40 ? "selected" : "normal" },
    { text: ">", style: "arrow" },
  ];

  const handlePageClick = (page) => {
    if (page.text === "<") {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    } else if (page.text === ">") {
      setCurrentPage((prev) => Math.min(prev + 1, 40));
    } else {
      setCurrentPage(Number(page.text));
    }
  };
  return (
    <div className="data-page">
      <div className="data-page__wrapper">
        <div className="data-page__greating">Hello {name} 👋🏼,</div>
        <div className="data-table">
          <div className="table-header">
            <h3>
              <div className="data-header">{dataHeader}</div>
              <div className="data-filter">{dataFilter}</div>
            </h3>
            <SearchForm onSearch={handleSearch} />
          </div>
          <table className="table">
            <thead>
              <tr>
                {tableDataHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataArr.map((data, rowIndex) => (
                <tr key={rowIndex}>
                  {tableDataHeaders.map((header, colIndex) => (
                    <td key={colIndex}>
                      <div
                        className={
                          header === "Status"
                            ? "table-cell__data-status"
                            : "table-cell__data"
                        }
                      >
                        <span
                          className={
                            header === "Status"
                              ? data[header] === "Active"
                                ? "table-cell__active"
                                : "table-cell__inactive"
                              : null
                          }
                        >
                          {data[header]}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="navigation-in-data">
            <div className="data-indexies">
              Showing data {from} to {to} of 256K entries
            </div>
            <div className="data-pages">
              {pages.map((page, index) => (
                <div
                  key={index}
                  className={`nav-item ${page.style}`}
                  onClick={() => handlePageClick(page)}
                >
                  {page.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataPage;
