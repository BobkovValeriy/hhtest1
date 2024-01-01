import React from "react";

function DataPage({ name, dataHeader, dataFilter, tableDataHeaders, dataArr }) {
  return (
    <div className="data-page">
      <div className="data-page__wrapper">
        <div>Hello {name} 👋🏼,</div>
        <div className="data-table">
          <div className="table-header">
            <h3>
              <div>{dataHeader}</div>
              <div>{dataFilter}</div>
            </h3>
            <form></form>
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
                    <td key={colIndex}>{data[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataPage;
