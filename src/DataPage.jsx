import React from "react";

function DataPage({ name, dataHeader, dataFilter, tableDataHeaders, dataArr }) {
  return (
    <div className="data-page">
      <div>Hello {name} 👋🏼,</div>
      <div className="data-table">
        <div className="table-header">
          <h3>
            <div>{dataHeader}</div>
            <div>{dataFilter}</div>
          </h3>
          <form></form>
        </div>
        <div className="data-table__headers">
          {tableDataHeaders.map((head) => (
            <div>{head}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataPage;
