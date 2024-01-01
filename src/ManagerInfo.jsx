import React from "react";

function ManagerInfo({ foto, name, position }) {
  return (
    <div className="manager-info">
      <img src={foto} alt="Evano" className="manager-foto" />
      <div className="manager-data">
        <div className="manager-name">{name}</div>
        <div className="manager-positon">{position}</div>
      </div>
    </div>
  );
}

export default ManagerInfo;
