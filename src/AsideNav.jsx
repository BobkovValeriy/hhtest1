import React from "react";
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

function AsideNav({
  name,
  position,
  setDataHeader,
  setDataFilter,
  setTableDataHeaders,
  setDataArr,
}) {
  function showAllActiveCustomers() {
    console.log("we show all active customers");
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
  return (
    <aside className="aside">
      <h2>
        <NavButton
          img={<LogoSVG />}
          text={"Dashboard"}
          additionalText={"v.01"}
          arrow={false}
        />
      </h2>
      <nav>
        <NavButton img={<DashboardSVG />} text={"Dashboard"} arrow={false} />
        <NavButton img={<ProductSVG />} text={"Product"} />
        <NavButton
          img={<CustomersSVG />}
          text={"Customers"}
          functionToLoadData={showAllActiveCustomers}
        />
        <NavButton img={<IncomeSVG />} text={"Income"} />
        <NavButton img={<PromoteSVG />} text={"Promote"} />
        <NavButton img={<HelpSVG />} text={"Help"} />
      </nav>
      <ManagerInfo foto={EvanoSVG} name={name} position={position} />
    </aside>
  );
}

export default AsideNav;
