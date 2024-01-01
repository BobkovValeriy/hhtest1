import React, { useEffect } from "react";
import NavButton from "./NavButton";
import LogoSVG from "./image/LogoSVG";
import DashboardSVG from "./image/DashboardSVG";
import ProductSVG from "./image/ProductSVG";
import CustomersSVG from "./image/CustomersSVG";
import IncomeSVG from "./image/IncomeSVG";
import PromoteSVG from "./image/PromoteSVG";
import HelpSVG from "./image/HelpSVG";
import ManagerInfo from "./ManagerInfo";
import EvanoSVG from "./image/evano.png";
import CustomersData from "./data";
import { useState } from "react";

function AsideNav({
  name,
  position,
  setDataHeader,
  setDataFilter,
  setTableDataHeaders,
  setDataArr,
}) {
  function showAllActiveCustomers() {
    setDataHeader("All Customers");
    setDataFilter("Active Members");
    setTableDataHeaders([
      "Customer Name",
      "Company",
      "Phone Number",
      "Email",
      "Country",
      "Status",
    ]);
    setDataArr(CustomersData);
  }
  const [lastClickedButton, setLastClickedButton] = useState(null);

  const handleButtonClick = (buttonId, currentFunction) => {
    setLastClickedButton(buttonId);
    if (currentFunction) currentFunction();
  };
  const buttonsData = [
    { id: 1, img: <DashboardSVG />, text: "Dashboard", arrow: false },
    { id: 2, img: <ProductSVG />, text: "Product" },
    {
      id: 3,
      img: <CustomersSVG />,
      text: "Customers",
      functionToLoadData: () => showAllActiveCustomers(),
      turnOn: true,
    },
    { id: 4, img: <IncomeSVG />, text: "Income" },
    { id: 5, img: <PromoteSVG />, text: "Promote" },
    { id: 6, img: <HelpSVG />, text: "Help" },
  ];
  useEffect(() => {
    handleButtonClick(3, showAllActiveCustomers);
  }, []);

  return (
    <aside className="aside">
      <div className="project-name__wrapper">
        <div className="logo-image">
          <LogoSVG />
        </div>
        <div className="project-name__text">
          Dashboard<span className="project-name__header">v.01</span>
        </div>
      </div>
      <nav className="navigation-panel">
        {buttonsData.map((button) => {
          return (
            <NavButton
              key={button.id}
              img={button.img}
              text={button.text}
              arrow={button.arrow}
              functionToLoadData={button.functionToLoadData}
              turnOn={button.turnOn}
              click={() =>
                handleButtonClick(button.id, button.functionToLoadData)
              }
              isClicked={lastClickedButton === button.id}
            />
          );
        })}
      </nav>
      <ManagerInfo foto={EvanoSVG} name={name} position={position} />
    </aside>
  );
}

export default AsideNav;
