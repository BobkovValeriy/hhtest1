import { useState } from 'react';
import './App.css';
import AsideNav from './AsideNav';
import DataPage from './DataPage';

function App() {
  const why = "wtf"
  const name = "Evano";
  const position = "Project Manager";
  const [dataHeader, setDataHeader] = useState('');
  const [dataFilter, setDataFilter] = useState('');
  const [tableDataHeaders, setTableDataHeaders] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  return (
    <div className="App">
      <AsideNav
        name={name}
        position={position}
        setDataHeader={setDataHeader}
        setDataFilter={setDataFilter}
        setTableDataHeaders={setTableDataHeaders}
        setDataArr={setDataArr}
      />
      <DataPage
        name={name}
        dataHeader={dataHeader}
        dataFilter={dataFilter}
        tableDataHeaders={tableDataHeaders}
        dataArr={dataArr}
      />
    </div>
  );
}

export default App;
